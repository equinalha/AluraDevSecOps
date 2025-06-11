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