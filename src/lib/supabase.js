// Configuração do cliente Supabase
// As variáveis de ambiente ficam no arquivo .env e não vão pro repositório

import { createClient } from '@supabase/supabase-js'

// pega a URL e a chave do projeto Supabase das variáveis de ambiente
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

// só cria o cliente se as duas variáveis estiverem definidas, senão retorna null
// assim o projeto não quebra se as variáveis não estiverem configuradas
export const supabase = url && key ? createClient(url, key) : null
