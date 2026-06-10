/* @param {string}  date     — ex: "Sábado, 14 de junho de 2025" */
/* @param {string}  badge    — ex: "HOJE" ou "ZOOM" (opcional)   */
/* @param {string}  time     — ex: "09h00 — 12h00"               */
/* @param {string}  title    — nome do evento                     */
/* @param {string}  location — local ou link                      */
/* @param {boolean} isOnline — exibe ícone de câmera se true      */
export default function EventCard({ date, badge, time, title, location, isOnline }) {
  return (
    <div className="event-card">

      <div className="event-card-top">
        <span>{date}</span>
        {badge && <span className="event-badge">{badge}</span>}
      </div>

      <div className="event-card-body">
        <p className="event-time">{time}</p>
        <p className="event-title">{title}</p>
        <p className="event-detail">
          <i className={`bi ${isOnline ? 'bi-camera-video' : 'bi-geo-alt'} me-1`} />
          {location}
        </p>
      </div>

    </div>
  )
}
