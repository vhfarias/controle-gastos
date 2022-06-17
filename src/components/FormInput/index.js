import './styles.css';

import { useState, useRef } from 'react';

export const FormInput = ({ name, type, title, value, onChange, errors }) => {

  const id = useRef(`input${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="formInput">
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
          onChange(e);
        }}
        onFocus={(e) => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(false);
        }}
      />
      <span
        className={`formError ${errors[name] ? 'errorActive' : ''}`}
      >
        {errors[name] && Object.values(errors[name])[0]}
      </span>
    </div>
  )
};