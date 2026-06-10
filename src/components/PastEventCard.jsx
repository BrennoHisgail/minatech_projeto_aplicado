/* @param {string} imgSeed — seed para picsum.photos */
/* @param {string} text    — descrição do evento passado */
export default function PastEventCard({ imgSeed, text }) {
  return (
    <div className="past-event-card">

      <div className="past-event-img">
        <img
          src={`https://picsum.photos/seed/${imgSeed}/600/200`}
          alt="Evento passado MinaTech"
        />
      </div>

      <div className="past-event-body">
        <p>{text}</p>
        <a href="#" className="btn btn-pink btn-sm">Veja mais</a>
      </div>

    </div>
  )
}
