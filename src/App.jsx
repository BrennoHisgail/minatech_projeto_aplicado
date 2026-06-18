import { Routes, Route } from 'react-router-dom'

import Home        from './pages/Home'
import QuemSomos   from './pages/QuemSomos'
import Parceiras   from './pages/Parceiras'
import Inscricao   from './pages/Inscricao'
import Programacao from './pages/Programacao'
import Faq         from './pages/Faq'
import Doacao      from './pages/Doacao'
import Contato     from './pages/Contato'

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<Home />}        />
      <Route path="/quem-somos"  element={<QuemSomos />}   />
      <Route path="/parceiras"   element={<Parceiras />}   />
      <Route path="/inscricao"   element={<Inscricao />}   />
      <Route path="/programacao" element={<Programacao />} />
      <Route path="/faq"         element={<Faq />}         />
      <Route path="/doacao"      element={<Doacao />}      />
      <Route path="/contato"     element={<Contato />}     />
    </Routes>
  )
}
