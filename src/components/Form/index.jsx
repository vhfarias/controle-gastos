import './styles.css'

import { useForm } from '../../hooks/useForm';

import { FormInput } from '../FormInput'
import { FormRadioGroup } from '../FormRadioGroup';

export const Form = ({ setEntries, config }) => {

  const [formData, handleChange, handleSubmit, errors] = useForm(config, setEntries);

  let fields = Object.entries(config).map(([name, settings], index) => {
    let element;
    switch (settings.type) {
      case "text":
        element = (<FormInput
          key={index}
          name={name}
          type={settings.type}
          title={settings.title}
          value={formData[name]}
          onChange={handleChange(name)}
          errors={errors}
        />);
        break;
      case "radio":
        element = (<FormRadioGroup
          key={index}
          optionsList={settings.options}
          value={formData[name]}
          onChange={handleChange(name)}
          errors={errors}
        />)
        break;
      default:
        break;
    }
    return element
  })

  return (
    <form
      className="entryForm"
      method="post"
      onSubmit={handleSubmit}
    >
      {fields}
      <button
        formAction='submit'
      >
        Novo Item
      </button>
    </form>
  )
}