# Flate Rate

## Tecnologias

### Versionamento
- [Git](https://git-scm.com/)

### Banco de dados
- [Oracle 11g Express](http://www.oracle.com/technetwork/database/database-technologies/express-edition/overview/index.html)

### Integração contínua
- [Jenkins](https://jenkins.io/)
- [SonarQube](https://www.sonarqube.org/)

### Backend
- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Spring Boot](https://projects.spring.io/spring-boot/)
- [Apache Maven](https://maven.apache.org/index.html)
- #### IDE
  - [Eclipse Neon](http://www.eclipse.org/neon/)
      - #### Plugins
          - [Eclemma](http://www.eclemma.org/)
          - [Project Usus](http://www.projectusus.org/)
- #### Teste
  - [Junit 4](http://junit.org/junit4/)
  - [DBUnit](http://dbunit.sourceforge.net/)
  - [H2](http://www.h2database.com/html/main.html)
  
### Frontend
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS 3](https://developer.mozilla.org/en/docs/Web/CSS/CSS3)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vue2](https://vuejs.org/) + [Vuex](https://vuex.vuejs.org/en/)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
- #### IDE
  - [VSCode](https://code.visualstudio.com/)
    - #### Plugins
      - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
      - [Git History (git log)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
      - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- #### Teste
  - [Karma](https://karma-runner.github.io/1.0/index.html)
  - [Mocha](https://mochajs.org/)
  - [Nighwatch](http://nightwatchjs.org/)
-  #### Empacotador
  - [Webpack](https://webpack.github.io/)


## Fluxo para desenvolvimento da história
### <a name="modelo-de-historia"></a> Modelo de história para o JIRA

1. #### Descrição seguindo a estrutura "As a _ _ _, I want _ _ _, so that _ _ _ " Fonte: [yodiz.com](http://www.yodiz.com/blog/writing-user-stories-examples-and-templates-in-agile-methodologies/)
      1. Para quem estamos contruindo, Quem é o usuário? — **tipo de usuário**
      1. O que estamos contruindo, qual a intenção? — **algum objetivo**
      1. Porque estamos construindo isso, qual o valor disto para o usuário? — **valor ou benefício**
1. #### Critérios de aceite
    Listagem dos pontos que serão validados para definir a história como 'entregue'
1. #### Definição dos dados
    Definição to tipo, tamanho e máscara dos inputs da tela caso haja.
1. #### Caminho feliz
    Descrição do passo a passo para realizar a funcionalidade.
1. #### Caminho triste
    Descrição do que acontece caso o usuário execute a funcionalidade de forma errada ou não permitida.
1. #### Dependência de outra Históra
    Código da história que precisa ser finalizada antes desta história, caso haja.
1. #### Anexo
    Arquivos necessários para o desenvolvimento da história tal como Wireframe / Design, Massa de dados.

> A aprovação da história para o início do desenvolvimento será feita mediante a checagem dos pontos decritos neste [modelo](#modelo-de-historia).

### Pontuação

A pontuação de uma história é feita levando em consideração a complexidade da mesma.

Para chegar a pontuação ideal da história, o desenvolvedor fará uma comparação com outra similar já desenvolvida ou compará-la a [históra base](#historia-base).

#### Range de pontos

> Fibonacci ( 1 - 2 - 3 - 5 - 8 - 13 - 21 )

#### <a name="historia-base"></a> História base

Para servir de base foi criada uma história fictícia de ponto **5** com a descrição abaixo.

Desenvolvimento de uma página com 3 campos, com as seguintes tasks:

**Front**

1. Criar validação no front dos campos
1. Desenvolver HTML da tela
1. Estilizar os inputs e mensagens de erro
1. Mostrar erro/sucesso
1. Enviar JSON para o back
1. Criar testes unitários
1. Criar testes funcionais
