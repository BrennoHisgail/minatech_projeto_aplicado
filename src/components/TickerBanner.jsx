/* Duplicamos as palavras para o loop contínuo da animação */
const WORDS = [
  'STEAM','Tecnologia','Engenharia','Inovação',
  'Programação','Ciência','Matemática','Física',
  'STEAM','Tecnologia','Engenharia','Inovação',
  'Programação','Ciência','Matemática','Física',
]

export default function TickerBanner() {
  return (
    <div className="ticker-section" aria-hidden="true">
      <div className="ticker-track">
        {WORDS.map((word, i) => (
          <span className="ticker-item" key={i}>{word}</span>
        ))}
      </div>
    </div>
  )
}
