import './styles.css'

export const Card = ({ type, title, icon, value }) => {

  return (
    <div className={`card ${type ? type : ''}`}>
      {icon}
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  )
}