# Amigo de Patas — Código do site e painel

Site de doações com três banners sequenciais, opções de contribuição e painel interno em `/admin`. Dados persistidos em Cloudflare D1, com registro e confirmação manual de doações.

## Colocar no GitHub
1. Extraia este ZIP.
2. Crie um repositório PRIVADO chamado `amigo-de-patas`.
3. Abra Add file > Upload files e envie o CONTEÚDO da pasta extraída. Inclua `.openai/hosting.json` e `.gitignore`.
4. Clique em Commit changes.

O GitHub armazena o código. Enviar os arquivos não publica automaticamente um site. O site original continua disponível em https://amigo-de-patas-igor.soarestrampo2026.chatgpt.site.

## Execução
Requer Node.js >=22.13.0 e pnpm. Execute `pnpm install`, depois `pnpm dev`. Para compilar use `pnpm build`. Leia `README-TECNICO.md` para migrações locais e arquitetura.

## Hospedagem e autenticação
Este projeto usa Vinext/React e Cloudflare Workers/D1, com integração Sites. A configuração `.openai/hosting.json` conserva a identidade do site original. A autenticação de produção depende do dispatcher Sites: os caminhos `/signin-with-chatgpt` e os cabeçalhos de usuário NÃO são fornecidos automaticamente pelo GitHub Pages ou por hospedagem externa.

GitHub Pages não executa o painel, a API nem o banco D1. Para hospedar fora de Sites é preciso configurar uma autenticação equivalente no servidor, proteger todas as rotas administrativas e ligar o banco D1. Nunca confie em cabeçalhos de identidade enviados pelo próprio visitante.

Administrador atual: soarestrampo2026@gmail.com. Contato público: amigosdapatabr@gmail.com. Não há confirmação automática de pagamentos.

Este pacote contém o código e as imagens, sem dados de doadores, banco de produção, tokens, senhas, node_modules ou histórico Git.
