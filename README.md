# MinaTech — Site Institucional

Site institucional do programa **Jornada MinaTech**, uma iniciativa gratuita que inspira meninas de escolas públicas de Florianópolis a explorarem tecnologia e engenharia.

---

## Tecnologias utilizadas

- **React 18** com Vite
- **Bootstrap 5.3**
- **CSS customizado** (variáveis, responsividade)
- **JavaScript** (hooks, IntersectionObserver, animações)
- **Supabase** — integração com banco de dados para os formulários de inscrição e doação

---

## Funcionalidades

- Navbar responsiva com link ativo por rota
- Animação de contagem no banner de estatísticas
- Ticker banner animado via CSS
- Seção expansível "O Minatech Acolhe"
- Formulário de inscrição multi-etapas com envio ao Supabase
- Formulário de doação com chave PIX e envio ao Supabase
- Modal de fotos nos eventos anteriores
- Accordion de perguntas frequentes
- Footer com navegação e contato

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/quem-somos` | Equipe, OSCs parceiras e missão |
| `/inscricao` | Formulário de inscrição |
| `/programacao` | Próximos eventos e edições anteriores |
| `/faq` | Perguntas frequentes |
| `/doacao` | Informações e formulário de doação |
| `/contato` | Dados de contato |

---

## Estrutura do projeto

```
src/
├── assets/          # imagens e logos
├── components/      # componentes reutilizáveis
├── lib/             # configuração do Supabase
└── pages/           # páginas da aplicação
```

---

## Como rodar localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

> Para os formulários funcionarem, crie um arquivo `.env` com as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`. Sem elas, o site roda normalmente mas o envio dos formulários é desabilitado.
