/* @param {string} logoText   — nome/logo textual da OSC */
/* @param {string} description — descrição da organização */
export default function OscCard({ logoText, description }) {
  return (
    <div className="osc-card">

      <div className="osc-logo-wrap">
        <span className="osc-logo-text">{logoText}</span>
      </div>

      <div>
        <p>{description}</p>
      </div>

    </div>
  )
}
