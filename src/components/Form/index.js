import './styles.css'
import { useState } from 'react';
import { getEntries, setEntries as saveEntries } from '../../util/handleEntries';

import { FormInput } from '../FormInput';
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
      console.error('Erro ao adicionar nova entrada\n', e);
    }
  }

  const handleChange = async (e, propSetFunction) => {
    await propSetFunction(e.target.value);
  }

  return (
    <form className="entryForm" method="post" onSubmit={handleSubmit}>
      <div>
        <FormInput name="description" type="text" title="Descrição" placeholder="Descreva a entrada..." value={description} onChange={(e) => handleChange(e, setDescription)} />
        <FormInput name="amount" type="text" title="Valor (R$)" placeholder="1000,00" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <FormInput name="reference" type="text" title="Referência" placeholder="abr/19" value={reference} onChange={(e) => setReference(e.target.value)} />
        <FormRadioGroup values={['Entrada', 'Saída']} state={entryType} setState={setEntryType} />
        <button formAction='submit'>Adicionar</button>
      </div>

    </form>
  )
}