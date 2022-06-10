import './styles.css';

import { useState, useRef } from 'react';

export const FormInput = ({ name, type, title, value, onChange, validate }) => {

  const id = useRef(`input${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  return (
    <div className="input2">
      <label
        htmlFor={id.current}
        className={(isFocused || value.length > 0) ? 'inputActive' : null}
      >
        {title}
      </label>
      <input
        id={id.current}
        type={type}
        name={name.toLowerCase()}
        value={value}
        onChange={(e) => {
          let status = validate(e.target.value);
          setErrorMessage(status.error ? status.message : '');
          onChange(e);
        }}
        onFocus={(e) => {
          setIsFocused(true)
        }}
        onBlur={(e) => {
          setIsFocused(false);
        }}
      />
      <span
        className={`formError ${errorMessage ? 'errorActive' : ''}`}
      >
        {errorMessage}
      </span>
    </div>
  )
};