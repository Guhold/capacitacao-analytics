# Site Pessoal para Desenvolvedores — Versão Completa

Landing page pessoal construída com **HTML, CSS e JavaScript**, sem
frameworks e sem etapa de build. Este projeto faz parte de uma capacitação
sobre **Deploy com GitHub Pages** e **Integração com Google Analytics**,
servindo como exemplo mais rico — com tema escuro estilizado e uma pequena
animação de terminal — para quem já tem alguma familiaridade com HTML/CSS/JS
e quer ver esses conceitos aplicados num projeto "de verdade".

## Objetivo

- Servir de material de apoio numa capacitação sobre **hospedagem de sites
  estáticos** (GitHub Pages) e **Google Analytics**.
- Mostrar como um site inteiramente estático — sem back-end, sem banco de
  dados — pode ser hospedado gratuitamente e monitorado com uma ferramenta
  de analytics.
- Servir de modelo de site pessoal para quem quiser adaptar e publicar o
  próprio.

## Estrutura do projeto

```
v1/
├── index.html      → Estrutura e conteúdo da página (seções, textos, links)
├── README.md       → Detalhes do projeto
└── src/    
    ├── styles.css  → Toda a aparência visual (cores, tipografia, layout)
    └── script.js   → Comportamento interativo (animação do terminal)
```

- **`index.html`** — O único arquivo que precisa existir para o site
  funcionar. Contém as seções Sobre, Tech Stack, Projetos e Contato.
- **`styles.css`** — Define a paleta de cores (variáveis no topo do
  arquivo), a tipografia e o layout responsivo.
- **`script.js`** — Roda a animação de digitação do terminal na seção de
  apresentação e o toggle de tema (claro/escuro). Não é obrigatório para o site funcionar; sem ele, o terminal simplesmente fica sem a animação.

Não há dependências para instalar e não há build: é só abrir o
`index.html` num navegador, ou hospedar os três arquivos como estão.

## Como fazer uma cópia deste projeto

Esse é o caminho mais simples para quem ainda não usa o Git no dia a dia —
tudo é feito pelo site do GitHub.

### 1. Baixe os arquivos do repositório original

1. Acesse a página do repositório no GitHub.
2. Clique no botão verde **"Code"**.
3. Escolha **"Download ZIP"**.
4. Extraia o arquivo `.zip` baixado em uma pasta no seu computador.

### 2. Crie um novo repositório seu

1. No GitHub, clique em **"New repository"**.
2. Dê um nome ao repositório (por exemplo, `meu-site`).
3. Deixe-o **público** (necessário para o GitHub Pages gratuito) e crie sem
   marcar a opção de adicionar um README — vamos subir os arquivos manualmente.
4. Clique em **"Create repository"**.

### 3. Suba os arquivos extraídos para o novo repositório

1. Na página do repositório recém-criado, clique em **"uploading an
   existing file"** (ou vá em **"Add file" → "Upload files"**).
2. Arraste os três arquivos extraídos (`index.html`, `styles.css`,
   `script.js`) para a área de upload.
3. Role até o final da página e clique em **"Commit changes"**.

Pronto — o repositório novo já tem uma cópia completa do projeto, sem
precisar instalar o Git nem rodar nenhum comando.

## Próximos passos da capacitação

- **Hospedar com GitHub Pages**: Em *Settings → Pages* do repositório,
  selecione a branch principal como fonte e salve. O site fica disponível
  em poucos minutos num endereço `usuario.github.io/nome-do-repositorio`.

- **Adicionar o Google Analytics**: Cole o snippet fornecido pelo Google
  Analytics dentro da tag `<head>` do `index.html`, o mais no início
  possível, e suba a alteração pelo mesmo caminho de upload usado acima.