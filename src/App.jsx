import { Routes, Route } from 'react-router-dom'

import Home        from './pages/Home'
import Oscs        from './pages/Oscs'
import Inscricao   from './pages/Inscricao'
import Programacao from './pages/Programacao'
import Faq         from './pages/Faq'
import Doacao      from './pages/Doacao'

/* Roteamento principal — cada rota carrega a página correspondente */
export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<Home />}        />
      <Route path="/oscs"        element={<Oscs />}        />
      <Route path="/inscricao"   element={<Inscricao />}   />
      <Route path="/programacao" element={<Programacao />} />
      <Route path="/faq"         element={<Faq />}         />
      <Route path="/doacao"      element={<Doacao />}      />
    </Routes>
  )
}
