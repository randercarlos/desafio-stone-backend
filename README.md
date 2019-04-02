# Sistema de Cadastro de Funcionários - Backend
> Simples CRUD de funcionários. Desafio para a vaga de Desenvolvedor na Stone Tecnologia.


Backend do sistema para gerenciamento de funcionários. Permite visualizar, cadastrar, alterar e excluir funcionários.
Trabalha com os seguintes dados: nome, idade, cargo

![](screenshot.png)

O backend do sistema está acessível no endereço: [https://desafio-stone-backend.herokuapp.com/](https://desafio-stone-backend.herokuapp.com/)


## Pré-requisitos


- Interpretador Node v8+ junto com o NPM v6+
- Sqlite3
- Browser atual


## Instalação e execução


**Windows, OS X & Linux:**

Baixe o arquivo zip e o descompacte ou baixe o projeto para sua máquina através do git clone [https://github.com/randercarlos/desafio-stone-backend.git](https://github.com/randercarlos/desafio-stone-backend.git)


- Entre no prompt de comando e vá até a pasta do projeto:

```sh
cd ir-ate-a-pasta-do-projeto
```

- Instale as dependências do node.js através do comando:

```sh
npm install
```

- Com as dependências instaladas, execute o comando:

```sh
npm start
```

- Se tudo der certo, o terminal exibirá uma mensagem que o projeto estará rodando no [http://localhost:3000](http://localhost:3000).

- Abra um navegador atual qualquer e execute o http://localhost:3000 para ver o projeto funcionando...

- Utilize um client resful como Postman ou Insomnia para testar ou consumir os dados.

- O sistema possui os seguintes endpoints:

## Endpoints

#### Funcionários Resources

- **[<code>GET</code> funcionarios]** - Listagem de funcionários
- **[<code>POST</code> funcionarios/search]**  - Listagem de funcionários com filtros(id_funcionario, nm_funcionario, vl_idade, nm_cargo)
- **[<code>POST</code> funcionarios]** - Cria um funcionário usando os atributos(nm_funcionario, vl_idade, nm_cargo)
- **[<code>GET</code> funcionarios/:id]** - Obtém um funcionário pelo seu id
- **[<code>PUT</code> funcionarios/:id]** - Atualiza um funcionário pelo seu id. Usa os atributos(nm_funcionario, vl_idade, nm_cargo) para atualização
- **[<code>DELETE</code> funcionarios/:id]** - Exclui um funcionário pelo seu id.


## Autor

Rander Carlos – randerccf@gmail.com
