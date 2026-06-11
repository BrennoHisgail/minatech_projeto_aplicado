/**
 * @param {string}  name        — nome da OSC
 * @param {string}  description — texto descritivo
 * @param {string}  imgSrc      — caminho da logo (opcional; exibe placeholder se omitido)
 * @param {string}  subtitle    — subtítulo opcional
 * @param {boolean} reverse     — logo à esquerda, texto à direita
 */
export default function OscCard({ name, description, imgSrc, subtitle, reverse }) {
  const logo = (
    <div className="osc-logo-wrap">
      {imgSrc
        ? <img src={imgSrc} alt={`Logo ${name}`} className="osc-logo-img" />
        : <div className="osc-logo-placeholder"><span>Logo</span></div>
      }
      {subtitle && <p className="osc-logo-sub">{subtitle}</p>}
    </div>
  )

  const text = (
    <div className="osc-text-wrap">
      <p>{description}</p>
    </div>
  )

  return (
    <div className={`osc-card${reverse ? ' osc-card--reverse' : ''}`}>
      {reverse ? <>{logo}{text}</> : <>{text}{logo}</>}
    </div>
  )
}
