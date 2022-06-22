<h1 align="center">Controle Financeiro</h1>

Uma lista de controle de gastos simples na qual podem ser inseridas entradas e saídas com uma descrição, valor e uma referência. As informações persistem no LocalStorage e os valores totais são atualizados automaticamente. Este projeto é baseado neste [vídeo](https://www.youtube.com/watch?v=pj4vA67olbU) do canal [Will Dev](https://www.youtube.com/channel/UCLTb4X0OBfp9rRGkhOcktbQ) do Youtube.

Você pode conferir o app aqui: <a href="https://controle-gastos-three.vercel.app/">![Website](https://img.shields.io/website?down_color=c43b3b&down_message=Offline&label=Controle%20Financeiro&logo=vercel&style=flat-square&up_color=5fab38&up_message=Online&url=https%3A%2F%2Fcontrole-gastos-three.vercel.app%2F)</a>

<div align="center">

![Captura de tela do app](.github/01.png)

</div>

### Tecnologias e Bibliotecas

- Node.js e React (create-react-app e react-icons)

### Instalação e Utilização

1. Clonar ou baixar este repositório
1. Instalar as dependências do projeto usando <code>npm install</code>
1. Executar <code>npm run build</code>
1. Abrir o arquivo <code>index.html</code> gerado na pasta <code>build</code>

### Histórico

#### v1.1.0

- Adicionada validação aos campos do formulário.
- Criação de um hook _useForm_ para gerenciar a criação e o estado do formulário a partir de um objeto de configuração dos campos.

#### v1.0.0

- Versão inicial. É possível adicionar e remover itens da lista e os totais de entrada, saída e geral são calculados automaticamente.

### Planos Futuros

- Filtragem da lista por valor de referência
- Categorização da entrada/saída em grupos

### Referências
- Inspiração: [Will Dev](https://www.youtube.com/watch?v=pj4vA67olbU)
- Validação do formulário com React Hook: [Felix Gerschau](https://felixgerschau.com/react-hooks-form-validation-typescript/)


