# Teste Front-End - API MARVEL

Deploy do Projeto: [https://bee-marvel.vercel.app/](https://bee-marvel.vercel.app/)  
Repositório do Projeto: [https://github.com/sandersonrafael/bee-marvel](https://github.com/sandersonrafael/bee-marvel)  

## Descrição

Projeto desenvolvido como desafio técnico de Front-End (Vue.js + Bootstrap 5.3) da Bee Delivery  
O sistema consulta a [API](https://developer.marvel.com/docs) da MARVEL e exibe páginas com carregamento dinâmico, que listam personagens, quadrinhos e eventos do universo marvel

## Como Utilizar em Desenvolvimento

- Necessário possuir o [Node.js](https://nodejs.org/en) instalado em sua máquina. Versão recomendada: 18.18.2 LTS
- Necessário criar um arquivo **.env.local** conforme campos presentes no arquivo **.env.example**
  - VITE_API_ENDPOINT - Atualmente o Endpoint disponível da API é o: https://gateway.marvel.com/v1/public/
  - VITE_API_PUBLIC_KEY - Pode ser obtida através da url: [https://developer.marvel.com/docs](https://developer.marvel.com/docs)
    - Criar uma conta na URL informada
    - Copiar a PUBLIC KEY, preenchendo no arquivo .env.local
    - Autorizar o acesso, na mesma página, para o endereço **localhost**
- Executar comando **npm install** no terminal, na raiz do projeto, para instalar dependências
- Executar o comando **npm run dev** para executar a aplicação

## Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- Vue.js 3.3.4
- Vue Router 4.2.5
- Bootstrap 5.3.2
- TypeScript 5.0.2
- Validator 13.11.0
- ESLint 8.51.0
- Vite.js 4.4.5

## Principais Recursos

- SPA
- Responsividade
- Carregamento dinâmico
- Paginação
- Pesquisa (filtragem) dinâmica de dados da API
- Validação de formulários
- Modais
- Menu mobile expansível
