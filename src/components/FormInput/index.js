import './styles.css';

export const FormInput = ({ name, type, title, placeholder, value, onChange }) => {
  return (
    <div className="formEntry">
      <label htmlFor={name.toLowerCase()}>{title}</label>
      <input id={name.toLowerCase()} type={type} name={name.toLowerCase()} placeholder={placeholder} value={value} onChange={onChange} ></input>
    </div>
  )
};