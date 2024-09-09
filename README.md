# Lista de Tarefas - PWA

Este projeto é uma aplicação web de lista de tarefas (to-do list) desenvolvida em HTML, CSS e JavaScript. Ela foi transformada em um **Progressive Web App (PWA)**, o que permite que seja instalada em dispositivos móveis e utilizada offline.

## Funcionalidades

- Adicionar novas tarefas
- Remover tarefas existentes
- Tarefas salvas localmente usando `localStorage`
- PWA: pode ser instalado no celular e funcionar offline
- Design responsivo, otimizado para dispositivos móveis

## Como Funciona

### Adicionar e Remover Tarefas

1. Adicione uma nova tarefa digitando no campo de texto e clicando no botão "Adicionar".
2. As tarefas são exibidas abaixo, com um botão "Remover" para cada uma.
3. As tarefas são salvas no navegador, então se você fechar e reabrir o aplicativo, elas ainda estarão lá.

### Instalação no Celular (PWA)

1. Abra o app no navegador do seu celular.
2. Você verá uma opção para adicionar o app à tela inicial (apenas em navegadores compatíveis como Google Chrome).
3. O app será instalado e poderá ser acessado diretamente da tela inicial como um aplicativo nativo.

## Como Hospedar o Projeto no GitHub Pages

Siga os passos abaixo para hospedar a aplicação usando o GitHub Pages:

1. Crie um repositório no [GitHub](https://github.com/).
2. Faça upload dos arquivos do projeto:
   - `index.html`
   - `style.css`
   - `script.js`
   - `manifest.json`
   - `service-worker.js`
   - Ícones (`icon-192x192.png`, `icon-512x512.png`)
3. No repositório, vá até as **Configurações** e role até a seção **GitHub Pages**.
4. Escolha a **branch** principal (geralmente `main` ou `master`).
5. Salve as configurações e o GitHub fornecerá um link onde a sua aplicação ficará disponível.

## Estrutura do Projeto

```bash
/
├── index.html           # Página principal do app
├── style.css            # Arquivo de estilos
├── script.js            # Lógica da lista de tarefas e localStorage
├── manifest.json        # Manifest para tornar o app um PWA
├── service-worker.js    # Service Worker para cache e funcionamento offline
├── icon-192x192.png     # Ícone de 192x192 pixels
├── icon-512x512.png     # Ícone de 512x512 pixels
└── README.md            # Documentação do projeto
