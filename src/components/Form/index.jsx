import './styles.css'

import { useForm } from '../../hooks/useForm';

import { FormInput } from '../FormInput'
import { FormRadioGroup } from '../FormRadioGroup';

export const Form = ({ setEntries, config }) => {

  const [formData, handleChange, handleSubmit, errors] = useForm(config, setEntries);

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
          value={formData.description}
          onChange={handleChange('description')}
          errors={errors}
        />
        <FormInput
          name="amount"
          type="text"
          title="Valor (R$)"
          value={formData.amount}
          onChange={handleChange('amount')}
          errors={errors}
        />
      </div>
      <div>
        <FormInput
          name="reference"
          type="text"
          title="Referência"
          value={formData.reference}
          onChange={handleChange('reference')}
          errors={errors}
        />
        <FormRadioGroup
          optionsList={['Entrada', 'Saída']}
          value={formData.type}
          onChange={handleChange('type')}
          errors={errors}
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