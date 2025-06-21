# Alura - DevSecOps
## Semana 1
* VSCode
* Git
* Branches
* Merge
* .gitignore

## Semana 2
### Diferencie CI, CD e Deploy Contínuo
CI, ou Continuous Integration, diz respeito a prática de integrar o código com frequência em um repositório comum. Desta forma, o risco é reduzido e a qualidade do código é aumentada.

### Explique o pipeline de entrega
Um pipeline de entrega é uma sequência de tarefas (ou jobs) automatizadas e sequenciais que são disparadas assim que o código é "commitado" no repositório. Estes jobs são responsáveis por executar o build da aplicação, realizar testes automatizados, avaliar a qualidade do código e realizar a entrega ou deploy automatizado.

### Cite ao menos um padrão de release e sua utilidade
Blue/Green deployment. Neste padrão de release, a nova aplicação (green) sobe em paralelo com a versão atual. Um teste é feito para verificar a operacionalidade do novo deploy e, assim que este teste seja bem sucedido, a versão nova passa a receber novas requisições, tornando-se a blue. A versão antiga é retirada do ar assim que terminar de atender as solicitações que já estavam em processamento.

## Semana 3
### Modelagem de Riscos com STRIDE
![exemplo](img/Signup-form-example.svg)
|  | **Ameaça** | **Controle** | **Descrição** |
| --- | --- | --- | --- |
| **S** | Spoofing | Authentication | O atacante pretende se passar por alguém que não é. |
| **T** | Tampering | Integrity | O atacante pretende modificar alguma informação (seja nos dados, nas configurações, etc) |
| **R** | Repudiation | Non-Repudiation | O atacante pretende esconder todas as suas ações. |
| **I** | Information Disclosure | Confidentiality | O atacante acaba por ter acesso às informações que não deveria. |
| **D** | Denial of Service | Availability | O atacante pretende deixar o sistema fora do ar ou inoperante. |
| **E** | Elevation of Privilege | Authorization | O atacante tenta realizar uma ação que não está habilitado a fazer. |

- **S (Spoofing)**
    - a: Riscos
        - O atacante consegue se registrar com e-mail de outra pessoa
        - O atacante consegue se registrar com e-mail descartável, porém se passando por outra pessoa
    - b: Descrição
        - Um atacante poderia se aproveitar destas falhas para manchar a imagem de outro usuário do serviço ou para cadastrar alguém de forma involuntária.
    - c: Tipo de atacante
        - Spammers, fraudadores, competidores (para poluir dados), bots.
- **T (Tampering)**
    - a: Riscos
        - Falta de sanitização dos campos do formulário permitem injeção de código (SQL, XSS)
    - b: Descrição
        - A injeção de código SQL, por exemplo, poderia levar o atacante a conseguir se logar no sistema e modificar dados dos usuários ou até mesmo modificar dados do próprio sistema
    - c: Tipo de atacante
        - Atacantes externos interessados em prejudicar a imagem da empresa ou de usuários do sistema
- **R (Repudiation)**
    - a: Riscos
        - Falta de log das ações do usuário
    - b: Descrição
        - Tentativas de cadastro com dados inválidos não são logadas, dificultando a identificação das ações de possíveis atacantes
    - c: Tipo de atacante
        - Atacantes externos interessados em prejudicar a imagem da empresa ou de usuários do sistema
- **I (Information Disclosure)**
    - a: Riscos
        - Falta de sanitização dos campos do formulário permitem injeção de código (SQL, XSS)
    - b: Descrição
        - A injeção de código SQL, por exemplo, poderia levar o atacante a conseguir acesso à toda base de dados e as informações contidas nela
    - c: Tipo de atacante
        - Atacantes externos interessados em prejudicar a imagem da empresa ou obter dados confidenciais dos usuários do sistema
- **D (Denial of Service)**
    - a: Riscos
        - Falta de sanitização dos campos do formulário permitem injeção de código (SQL, XSS)
    - b: Descrição
        - A injeção de código SQL, por exemplo, poderia levar o atacante a conseguir executar ações a nível de sistema operacional, retirando totalmente o serviço do ar
    - c: Tipo de atacante
        - Atacantes externos interessados em prejudicar a imagem da empresa
- **E (Elevation of Privileges)**
    - a: Riscos
        - Falta de sanitização dos campos do formulário permitem injeção de código (SQL, XSS)
    - b: Descrição
        - A injeção de código SQL, por exemplo, poderia levar o atacante a conseguir executar ações a nível de sistema operacional, colocando a si mesmo como administrador do sistema e executando ações administrativas em nome de outros usuários
    - c: Tipo de atacante
        - Atacantes externos interessados em prejudicar a imagem da empresa, obter acesso privilegiado e roubo de informações