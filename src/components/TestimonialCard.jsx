/* @param {string} name    — nome da ex-aluna */
/* @param {string} text    — depoimento       */
/* @param {string} imgSeed — seed picsum      */
export default function TestimonialCard({ name, text, imgSeed }) {
  return (
    <div className="testimonial-card">

      <div className="testimonial-avatar">
        <img
          src={`https://picsum.photos/seed/${imgSeed}/80/80`}
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
