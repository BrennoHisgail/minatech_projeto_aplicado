/* @param {string} name       — nome completo */
/* @param {string} role       — cargo ou função */
/* @param {string} description — texto descritivo */
/* @param {string} imgSeed    — seed para picsum.photos */
export default function TeamCard({ name, role, description, imgSeed }) {
  return (
    <div className="team-card">

      <div className="team-photo">
        <img
          src={`https://picsum.photos/seed/${imgSeed}/160/180`}
          alt={`Foto de ${name}`}
        />
      </div>

      <div className="team-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p>{description}</p>
      </div>

    </div>
  )
}
