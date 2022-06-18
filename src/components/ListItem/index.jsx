import './styles.css';

import { AiFillCloseCircle, AiFillRightCircle } from 'react-icons/ai';

export const ListItem = ({ item, onRemove }) => {
  return (
    <li className="listItem">
      <span>{item.description}</span>
      <span className="moneyFormat">
        <span>R$</span>
        <span>{`${Number(item.amount).toFixed(2).replace('.', ',')}`}</span>
      </span>
      <AiFillRightCircle className={item.type === 'Entrada' ? "income iconIncome" : "expense iconExpense"} />
      <span>{item.reference}</span>
      <button className="btnRemove" onClick={() => onRemove(item.id)}><AiFillCloseCircle /></button>
    </li>
  )
}