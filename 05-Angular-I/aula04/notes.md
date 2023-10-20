## O que são diretivas
## Diretivas padrões do Angular
## Principais diretivas


### Models
    Funcionam como uma interface, mas possuem algumas vantagens
### SCSS
    .container{
        h2{
            color:red
        }
    h2{ 
        color: blue
    }   
    // Todos os h2 dentro da classe 'container' recebem vermelho
    // OS h2 fora de 'container' recebem azul


### Bootstrap
    https://valor-software.com/ngx-bootstrap/#/documentation
    
    ng add ngx-bootstrap

##

### O que são diretivas


### Diretivas padrões do Angular
    • ngIf

    • ngFor

    • ngClass

    • ngStyle

    • ngModel

### Principais diretivas


##
## ATIVIDADE DA AULA:

## Criar uma tabela que vai registrar uma atividade sempre que ela for clicada:

 
Criar component: task-table
    
    ng g c task-table

### Criar uma variavel (array) que vai receber as tarefas por push. Ela vai iniciar com um array vazio.

#
    >>>> app.ts  (no pai)
    listTaskToTable: Task[] = [];



### Qual o output que toda vez que clicar vai enviar uma informação


    >>>> app.html
    <app-task-list [tasks]="listTask" (handleTask)="handleTaskApp($event)"></app-task-list>

#


    >>>> app.ts
    handleTaskApp(task: Task){
        this. selectedTask = task
        this.listTaskToTable.push(task)
    }

#


    >>>> task-list.ts
    @Output() handleTask = new EventEmitter();

#


    >>>> app.html
    <app-task-table [taskList]="listTaskToTable" ></app-task-table>

#


    >>>> task-table.ts
    @Input() taskList: Task[] = []

#
criar um ngFor para mostrar

    >>>> task-table.html
    <tr *ngFor="let task of listTaskToTable">
        <td>{{task.title}}</td>
        <td>{{task.description}}</td>
        <td>{{task.date}}</td>
    </tr>

#

#



https://www.youtube.com/watch?v=tPOMG0D57S0
Loiane Groner