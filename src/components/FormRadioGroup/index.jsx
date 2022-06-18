import './styles.css'

import React, { useRef } from 'react';

export const FormRadioGroup = ({ optionsList, value, onChange }) => {

  const id = useRef(Math.floor(Math.random() * 100000));

  return (
    <div className="formEntry radioGroup">
      {
        optionsList.map((option) => {
          return (
            <React.Fragment key={`${id}_${option}`}>
              <input id={`radio${option}`} type="radio" name={`group${id.current}`} value={option} checked={value === option} onChange={onChange} />
              <label htmlFor={`radio${option}`} >{option}</label>
            </React.Fragment>

          )
        })
      }
    </div >
  )
}