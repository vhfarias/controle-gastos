import { removeEntryById } from '../../util/handleEntries'
import { ListItem } from '../ListItem'
import './styles.css'


export const List = ({ entries, setEntries }) => {
  const handleRemove = (id) => {
    let entries = removeEntryById(id)
    setEntries(entries);
  }
  return (
    <ul className="list">
      <li className="header">
        <span>Descrição</span>
        <span>Valor</span>
        <span>Tipo</span>
        <span>Referência</span>
      </li>
      {entries.map((item) => {
        return (
          <ListItem key={item.id} item={item} onRemove={handleRemove} />
        )
      })}
    </ul>
  )
}