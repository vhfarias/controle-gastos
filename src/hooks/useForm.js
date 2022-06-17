import { useState } from 'react';

import { getEntries, setEntries as saveEntries } from '../util/handleEntries';

export const useForm = (config, setEntries) => {
  let defaultData = Object.fromEntries(Object.entries(config).map(([key, value]) => [key, value.initialValue ?? '']))
  let [data, setData] = useState(defaultData);
  let [errors, setErrors] = useState({});

  const validate = (value, validations) => {
    let errors = [];
    //required
    if (validations.required && validations.required.value) {
      if (value.trim().length === 0) {
        errors.push(['required', validations.required.message]);
      }
    }
    //pattern
    if (validations.pattern && validations.pattern.value) {
      if (value.match(validations.pattern.value) === null && value.length > 0) {
        errors.push(['pattern', validations.pattern.message]);
      }
    }
    //custom
    if (validations.custom && validations.custom.value) {
      if (!validations.custom.value(value) && value.length > 0) {
        errors.push(['custom', validations.custom.message]);
      }
    }
    return Object.fromEntries(errors);
  }

  const validateAll = (data) => {
    let validations = Object.entries(config).reduce((acc, [name, values]) => {
      if (values['validation']) {
        return { ...acc, [name]: values['validation'] };
      }
      else return acc;
    }, {})

    let newErrors = Object.entries(validations).map(([name, validations]) => {
      let err = validate(data[name], validations);
      return [name, err];
    }).filter(([name, err]) => Object.keys(err).length > 0);

    return Object.fromEntries(newErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = { ...data };

    //primeiro sanitizar os dados
    newEntry = Object.entries(newEntry);
    newEntry = newEntry.map(([name, value]) => [name, config[name].sanitize ? config[name].sanitize(value) : value]);
    newEntry = Object.fromEntries(newEntry);
    //depois validar
    let newErrors = validateAll(newEntry);
    //gerando um ID
    newEntry.id = Math.floor(Math.random() * 100000);
    //atualizando variável de erros
    setErrors(newErrors);
    //se não tiver erros, atualize a variável de dados e persista os dados
    if (Object.keys(newErrors).length === 0) {
      //salvando no localStorage
      saveEntries([...getEntries(), newEntry]);
      //atualizando variável de dados
      setEntries((prevState) => [...prevState, newEntry]);
      //limpando os campos do formulário
      setData(defaultData);
    }
  }

  const handleChange = (key) => (e) => {
    setData({
      ...data,
      [key]: e.target.value,
    })
  }

  return [data, handleChange, handleSubmit, errors];
}