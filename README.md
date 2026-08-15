#  🎲 APP Lotomania - 0.0.0

Aplicação React (SPA) para acompanhar apostas da Lotomania (Caixa Econômica Federal) consumindo a [API-Lotomania](https://github.com/SkyArtur/API-Lotomania). 
Projeto de uso pessoal e didático — construído para aprender e praticar React (componentes, hooks, roteamento, autenticação via JWT, 
formulários controlados/não controlados e "containerização"), sem fins comerciais.

> Em desenvolvimento

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- ESLint (flat config)

## Pré-requisitos

- Node.js 18+
- npm

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente copiando o exemplo:

   ```bash
   cp .env.example .env
   ```

3. Suba o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   A aplicação abre em `http://localhost:5173`.

## Scripts disponíveis

| Script             | Descrição                                    |
|--------------------|-----------------------------------------------|
| `npm run dev`      | Ambiente de desenvolvimento com hot reload     |
| `npm run build`    | Gera o build de produção em `dist/`            |
| `npm run preview`  | Serve o build de produção localmente           |
| `npm run lint`     | Roda o ESLint no projeto                       |

## Variáveis de ambiente

| Variável        | Descrição                                                              |
|-----------------|--------------------------------------------------------------------------|
| `VITE_API_URL`  | Prefixo usado nas chamadas à API-Lotomania (ex.: `/api-lotomania`)       |

Em desenvolvimento, o Vite faz proxy de `/api-lotomania` para `http://localhost:8085` (ver `vite.config.js`) — ajuste o `target` conforme o endereço em que a API-Lotomania estiver rodando localmente.
