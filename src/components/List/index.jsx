import './styles.css'

import { ListItem } from '../ListItem'

import { removeEntryById } from '../../util/handleEntries'

export const List = ({ headers, entries, setEntries }) => {
  const handleRemove = (id) => {
    let entries = removeEntryById(id)
    setEntries(entries);
  }
  return (
    <ul className="list">
      <li className="header">
        {headers.map((header, index) => {
          return (
            <span key={index}>{header}</span>
          )
        })}
      </li>
      {entries.map((item, index) => {
        return (
          <ListItem key={item.id + index} item={item} onRemove={handleRemove} />
        )
      })}
    </ul>
  )
}