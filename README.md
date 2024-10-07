# meu-bot-telegram
# Telegram Bot - Node.js

Este projeto é um bot de Telegram simples, desenvolvido utilizando a biblioteca `node-telegram-bot-api`. O bot responde a comandos básicos e interage com os usuários por meio de mensagens de texto e botões inline.

## Funcionalidades

- `/start`: Inicia a interação com o bot, enviando uma mensagem de boas-vindas.
- `/echo [mensagem]`: Repete a mensagem fornecida pelo usuário.
- `/button`: Envia um botão inline para o usuário, que ao ser clicado, dispara uma mensagem de retorno.

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/afonsope/telegram-bot-nodejs.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o bot:
   ```bash
   node bot.js
   ```

Certifique-se de substituir o token pelo seu próprio ao inicializar o bot.
