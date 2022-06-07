import { useRef } from 'react';
import './styles.css'
export const FormRadioGroup = ({ values, state, setState }) => {

  const [selection, setSelection] = [state, setState];
  const id = useRef(Math.floor(Math.random() * 100000));

  return (
    <div className="formEntry radioGroup">
      {
        values.map((value, index) => {
          return (
            <div key={`${id.current}_${index}`}>
              <input id={`radio${value}`} type="radio" name={`group${id.current}`} value={value} checked={selection === value} onChange={(e) => setSelection(e.target.value)} />
              <label htmlFor={`radio${value}`} >{value}</label>
            </div>
          )
        })
      }
    </div>
  )
}