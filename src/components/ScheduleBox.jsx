/* @param {string} title — título do cabeçalho (ex: "Sábado — 14/06") */
/* @param {Array}  items — [{ time, title, desc }]                     */
export default function ScheduleBox({ title, items }) {
  return (
    <div className="schedule-box">

      <div className="schedule-header">{title}</div>

      {items.map((item, i) => (
        <div className="schedule-item" key={i}>
          <span className="schedule-time">{item.time}</span>
          <div className="schedule-desc">
            <strong>{item.title}</strong>
            {item.desc && <><br />{item.desc}</>}
          </div>
        </div>
      ))}

    </div>
  )
}
