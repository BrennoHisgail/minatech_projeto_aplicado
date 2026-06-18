export default function PastEventCard({ img, title, onClick }) {
  return (
    <div className="past-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div className="past-card-img">
        <img src={img} alt={title} />
        <div className="past-card-overlay">
          <i className="bi bi-arrows-fullscreen" />
        </div>
      </div>
      <p className="past-card-title">{title}</p>
    </div>
  )
}
