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
## ATIVIDADE 1 DA AULA:

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

#
#


## ATIVIDADE 2 DA AULA:

## Criar categorias para as tarefas


#

Atualizar a model para criar um status na class Task

    >>>> task.model.ts
    export class Task {
        title: string;
        description: string;
        date: Date;
        status: string;
        
        // uma das vantagens da model é que aqui temos uns constructor
        // Aqui é onde vai CRIAR a classe. São os valores default
        constructor(title = '', description = '', date = new Date(), status =''){
            this.title = title;
            this.description = description;
            this.date = date;
            this.status = status;
        }
    }

#

Criar um select no form

    >>>> task-form.html
                <label for="status">Status</label>
                <select name="status" id="status" name="status" [(ngModel)]="newTask.status">
                    <option disabled selected>Selecione uma opção</option>
                    <option value="toDO" >toDo</option>
                    <option value="doing" >Doing</option>
                    <option value="done" >Done</option>
                </select>

#

Exibir na lista

    >>>> task-list.html
    <div *ngFor="let task of tasks"   [ngClass]="{'d-none': task.title === 'teste'}">
            <div (click)="selectedTask(task)">
                {{task.title}} - 
                <!-- {{task.title | currencyFormat: 'BRL' }} -  -->
                <!-- BRL USD  -->
                {{task.description | slice: 0:4 }} - 
                {{task.date | date:'dd/MM/yy'}} -
                {{task.status}} 
                <!--  COMO FAZER UM IF  -->
                <!-- <div *ngIf="task.title !== 'teste'">
                    {{task.title}} - {{task.description}} - {{task.date}}
                </div> -->
            </div>
