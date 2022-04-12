# Anotações sobre o desenvolvimento do projeto

## Projeto: try

---

> versão: 0.0.0

**Try** é uma CLI que auxilia na organização dos estudos através da
automatização da construção dos diretórios, e arquivos de anotações, resumos
e revisões.

Fluxo

Comandos:

**Init**: Inicia o programa solicitando ao usuário algumas informações de configuração:

- **Nome do curso**
  - Por padrão, cria um diretório com o nome do curso fornecido pelo usuário no diretório HOME$
  - Pode receber um path onde o diretório será criado
  - Data de Inicio
  - Data de fim
  - Módulo(s)
    - O usuário pode fornecer um nome de módulo ou poderá adicioná-lo posteriormente .
  - Bloco(s)
    - Também poderá fornecer o nome do bloco do módulo, mas também poderá fornecer posteriormente.
    - Quando o usuário fornece um bloco, seja no prompt inicial ou posteriormente, é criado uma pequena estrutura de pastas:
      - topcs
        - [tópico informado pelo usuário]
          - notes
          - fixation-exercises
    - summarys

> Obs: As datas de inicio e fim do curso serão utilizadas para cálculo do andamento do curso, de maneira que o usuário poderá acompanhar o quanto do curso foi realizado.

Por fim, o comando `init` também cria um diretório `dados do curso` com o arquivo `data` onde serão armazenadas as informações fornecidas pelo usuário. Este arquivo é um objeto _json_ e toda a informação gerada pelos próximos comandos serão serializadas neste documento e consultada para compilação dos dados.

**add**: Adiciona um dado que pode ser um novo curso, módulo ou bloco. Também adiciona arquivos de anotações e resumos. Um detalhe importante desse comando é a opção de criar **skills**.
As **skills** são as habilidades/capacidades a serem desenvolvidas em cada tópico do curso. É de extrema importância defini-las. Elas serão a base para a medida para o acompanhamento do desempenho. Ela ficará armazenada no objeto e nos _templates_ de resumos e anotações.

O comando `add` possui as seguintes opções:

**add --course**: cria um novo curso no diretório HOME$ ou no _path_ passado como argumento.

**add --module**: Adiciona um novo módulo ao curso. Se houver mais de um curso um _prompt_ com uma lista dos cursos disponíveis será exibida para que o usuário defina em qual curso será inserido o novo módulo, caso contrário criará no curso atual.

**add --block**: Adiciona um novo bloco ao módulo. Se houver mais de um curso com mais de um módulo, um _prompt_ com uma lista dos cursos disponíveis será exibida para que o usuário defina, a seguir, uma segunda lista será exibida para que seja definido em qual módulo será inserido o novo bloco, caso contrário criará no módulo atual.

**add --topic**: Adiciona um novo tópico ao bloco do módulo. Se houver mais de um curso e mais de um módulo com mais de um bloco, um **prompt** com uma lista dos cursos, módulos e blocos disponíveis será exibida para que o usuário defina. Caso contrário criará no bloco atual.

**add --skills**: Adiciona a(s) _skill(s)_ necessária(s) para realização daquele tópico.

**add --note**: Cria um arquivo para anotações no _path_ específico (`course/module/blocks/{bloco-do-usuario}/topics/{topicos-do-usuario}/notes/{nota-dousuario}`).

**add --summary**: Cria um arquivo para resumos no path específico (`course/module/blocks/{bloco-do-usuario}/summarys/{resumo-do-usuário}`).

Os arquivos de anotações e resumos terão um _template_ pré-definido que será alimentado por informações de um _prompt_ que solicitará as propriedades:

**Para notas**: Titulo, Tópicos (seleção dos tópicos do bloco), _Tag_ (uma marcação que poderá ser usada para uma busca futura) e Auto avaliação do entendimento (esse valor será buscado para um consolidado no futuro).
Para os Resumos: Título, Tópicos (seleção dos tópicos do bloco), _Tag_ (uma marcação que poderá ser usada para uma busca futura).

```



```
