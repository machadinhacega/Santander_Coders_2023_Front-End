# Filtrar

Criamos um componente chamado "task-filter" (vamos chamar de filter)
E ja tinhamos um componente chamado "task-list" (vamos chamar de list)

[revisando] >
temos um componente chamado task-form, que recebe as informações do usuário (titulo, descrição, data e status). Essas informações são passadas para a task-list, que é responsável por mostrar as tarefas cadastradas.


### ATIVIDADE: Criar um filtro que mostre/separe as tarefas por status (toDo, doing, done)

#
No nosso <filter.html> vamos criar um select com as opções dp filtro
>filter.html

    <div>
        <label for="filterTask">Filtrar</label>
        <select name="filterTask" id="filterTask">
            <option value="all">Mostrar tudo</option>
            <option value="toDO">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </select>
    </div>
#


#
No <filter.ts> vamos criar a variável que receberá o valor do select pelo ngModel. Ela já inicia com o 'all', que assim o "mostrar tudo já fica marcado.
>filter.ts

    filter:string = 'all'

#
Novamente no <filter.html> vamos passar o valor do select pelo ngModel para a nossa variável filter
>filter.html

    [(ngModel)]="filter" (change)="selectFilter()"
    ↓

    <div>
    <label for="filterTask">Filtrar</label>
    <select name="filterTask" id="filterTask" [(ngModel)]="filter" (change)="selectFilter()" >
        <option value="all">Mostrar tudo</option>
        <option value="toDO">ToDo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
    </select>
</div>

#

Ainda no <filter.html> precisamos passar esse valor do filtro em um momento específico, que nesse caso é sempre que um novo filtro seja selecionado, quando MUDAR o valor do nosso select. Sendo assim vamos usar um "(change)" no select, passando pra ele uma função que chamaremos no nosso filter.ts

    (change)="selectFilter()
    ↓

    <div>
        <label for="filterTask">Filtrar</label>
        <select name="filterTask" id="filterTask"[(ngModel)]="filter" (change)="selectFilter()" >
            <option value="all">Mostrar tudo</option>
            <option value="toDO">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </select>
    </div>





#
No nosso <filter.ts> vamos criar a função selectFilter() que será acionada sempre que o valor do select mudar. Dentro dela podemos colocar um console.log(this.filter) e perceber que no nosso console ja aparece o valor selecionado no nosso "select" do html. 
>filter.ts

    selectFilter(){
        console.log(this.filter)
  }

#
Mas ainda precisamos passar essa informação para a nosas list. Sendo assim, precisaremos passar por Output. Vamos criar uma variavel chamada "onChangeFilter", que vai receber um "new EventEmitter()"
>filter.ts

    @Output() onChangeFilter = new EventEmitter();

#
Na nossa função "selectFilter()" vamos chamar nossa variavel do Output (que agora é um EventEmitter) e emitir para ela nossa informação.

    selectFilter(){
        this.onChangeFilter.emit(this.filter)
    }

#
Feito isso, a informação foi mandada para fora do nosso filter, então precisamos pegá-la no nosso <list.html>. No nosso lit.html vamos chamar o component task-filter.

Após chamar, vamos passar o nosso Output para ele.
(onChangeFilter)
O nosso "(onChangeFilter)" vai receber uma nova função. Essa funçao será a função que vamos chamar no nosso list.ts para receber a informação do filtro:
"handleFilter($event)"
>list.html

     <app-task-filter (onChangeFilter)="handleFilter($event)"></app-task-filter>

#
No nosso <list.ts> vamos definir a função que foi chamar no html e dentro dela podemos passar um consolog para visualizar que a informação está chegando no nosso componente.
>list.ts

    handleFilter(filter:string){
        console.log(filter)
    }


#
Pronto!

De trás pra frente:

Nossa handleFilter recebe por parâmetro um filter do tipo string. 
Esse filter é passado no nosso html.
em "handleFilter($event)" esse $event nos entrega o filter, que foi passado pelo "onChangeFilter".
Que, por sua vez, é um EventEmitter.
O "onChangeFilter" recebe o filter que é emitido pela função "selectFilter()".
Função essa que é chamada mp filter.html e recebe o valor do select que foi recebido pelo ngModel.

##

### Para FILTRAR mesmo agora:

>list.ts

• Criar variável "tasksFiltradas"
    
    tasksFiltradas: Task[] = [];

• Dentro da handleFilter() atribuir um filtro à tasksFIltradas

    handleFilter(filter:string){
        this.tasksFiltradas = this.tasks.filter(item => {
        if(item.status === filter){
            return item;
        }
      return
    })

    console.log(this.tasksFiltradas)
    }


• Para mostras também TODAS as tarefas, podemos add um if antes do filtro

    handleFilter(filter:string){
    if(filter === 'all'){
        this.tasksFiltradas = this.tasks;
        console.log(this.tasksFiltradas)
        return;
    }
    this.tasksFiltradas = this.tasks.filter(item => {
        if(item.status === filter){
        return item;
        }
        return
    })

    console.log(this.tasksFiltradas)
    }

• Agora pra realmente mostrar na tela, temos que ir no list.html e trocar tasks por tasksFiltradas
>list.html

     <div *ngFor="let task of tasksFiltradas"   [ngClass]="{'d-none': task.title === 'teste'}">


• Apos isso basta inicialinar com um ngOnInit as tasksFIltradas ja com todasas tasks:
    ngOnInit(){
        this.tasksFiltradas = this.tasks
    }


### SHOW