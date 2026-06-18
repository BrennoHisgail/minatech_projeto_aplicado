/* @param {string} img  — imagem importada do evento */
/* @param {string} text — descrição do evento passado */
export default function PastEventCard({ img, text }) {
  return (
    <div className="past-event-card">

      <div className="past-event-img">
        <img
          src={img}
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