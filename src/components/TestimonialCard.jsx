/* @param {string} name — nome da ex-aluna */
/* @param {string} text — depoimento       */
/* @param {string} img  — imagem importada */
export default function TestimonialCard({ name, text, img }) {
  return (
    <div className="testimonial-card">

      <div className="testimonial-avatar">
        <img
          src={img}
          alt={`Foto de ${name}`}
        />
      </div>

      <div>
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-text">{text}</p>
      </div>

    </div>
  )
}