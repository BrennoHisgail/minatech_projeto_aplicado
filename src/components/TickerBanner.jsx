// Faixa de palavras animada que passa na tela em loop
// Fica entre as seções da home e serve mais pra estética do que pra conteúdo

// lista de palavras — duplicada pra o loop da animação CSS parecer contínuo
const WORDS = [
  'STEAM','Tecnologia','Engenharia','Inovação',
  'Programação','Ciência','Matemática','Física',
  'STEAM','Tecnologia','Engenharia','Inovação',
  'Programação','Ciência','Matemática','Física',
]

export default function TickerBanner() {
  return (
    // aria-hidden porque é só decorativo, leitores de tela podem ignorar
    <div className="ticker-section" aria-hidden="true">
      <div className="ticker-track">
        {WORDS.map((word, i) => (
          <span className="ticker-item" key={i}>{word}</span>
        ))}
      </div>
    </div>
  )
}
