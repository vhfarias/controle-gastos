import './styles.css'
import { useState } from 'react';
import { getEntries, setEntries as saveEntries } from '../../util/handleEntries';

import { FormInput } from '../FormInput'
import { FormRadioGroup } from '../FormRadioGroup';

export const Form = ({ setEntries }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [entryType, setEntryType] = useState('Entrada');
  /*   const [formValidate, setFormValidate] = useState(true);
  
    const validateDescription = (value) => {
      if (value = '') setFormValidate(false);
    }
  
    const validateAmount = (value) => {
      let regexp = /[0-9]+[,.]{1}[0-9]{2}/;
      if (value.match(regexp) === null) setFormValidate(false);
    }
  
    const validateRef = (value) => {
      const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      let regexp = /^([A-z]{3})\/([0-9]{4}|[0-9]{2})\b/g
      if (value.match(regexp) === null) {
        setFormValidate(false);
        return;
      }
      let [m, y] = value.split('/')
      if (months.indexOf(m) === -1) {
        setFormValidate(false);
        return;
      }
    } */


  const handleSubmit = (e) => {
    //prevent page reload
    e.preventDefault();

    //create entry object
    let newEntry = {
      id: Math.floor(Math.random() * 1000000),
      type: entryType,
      description,
      amount: Number(amount.replace(',', '.')),
      dateRef: reference
    }
    try {
      //send to storage
      let entries = getEntries();
      entries.push(newEntry);
      saveEntries(entries);
      //update app state
      setEntries((prevState) => [...prevState, newEntry])
      //clear fields
      setDescription('');
      setAmount('');
      setReference('');
      setEntryType('Entrada');
    } catch (e) {
      console.error('Erro ao adicionar novo item.\n', e);
    }
  }

  return (
    <form
      className="entryForm"
      method="post"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          name="description"
          type="text"
          title="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          validate={(value) => {
            let status = {
              error: false,
              message: ''
            }
            if (value === '') {
              status.error = true;
              status.message = 'Por favor, insira uma descrição';
            }
            return status;
          }}
        />
        <FormInput
          name="amount"
          type="text"
          title="Valor (R$)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          validate={(value) => {
            let status = {
              error: false,
              message: ''
            }
            let regexp = /[0-9]+[,.]{1}[0-9]{2}/;
            if (value === '') {
              status.error = true;
              status.message = 'Insira um valor';
            }
            if (value.match(regexp) === null) {
              status.error = true;
              status.message = 'Insira um valor válido';
            }
            return status;
          }}
        />
      </div>
      <div>
        <FormInput
          name="reference"
          type="text"
          title="Referência"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          validate={(value) => {
            let status = {
              error: false,
              message: ''
            }
            const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
            let regexp = /^([A-z]{3})\/([0-9]{4}|[0-9]{2})\b/g;

            if (value.match(regexp) === null) {
              status.error = true;
              status.message = 'Insira uma data (mmm/aa)';
            }

            let [m, y] = value.split('/')
            if (months.indexOf(m) === -1) {
              status.error = true;
              status.message = 'mês inválido';
            }
            return status;
          }}
        />
        <FormRadioGroup
          values={['Entrada', 'Saída']}
          state={entryType}
          setState={setEntryType}
        />
        <button
          formAction='submit'
        >
          Novo Item
        </button>
      </div>

    </form>
  )
}