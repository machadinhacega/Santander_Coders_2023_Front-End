import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { IListTask } from 'src/app/app.component';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  // esses são os parâmetros quee será enviados para os componentes (mandar por import)
  // a variável 'tasks' é do tipo 'IListTasks
  // Esse tipo (IListTasks) foi definido e exportado do app.ts
  @ Input() tasks: Task[] = [];
  // Mandando a informação
  @Output() handleTask = new EventEmitter();


  interval: any;
  
  teste(){
    console.log(this.tasks)
  }

  // Quando Inicia ESSA aplicação. O task-list
  ngOnInit(){
    console.log('Iniciou o task-list')
    // this.interval = setInterval(() => {
    //   console.log('segundos');
    // },1000)
  }

  ngOnDestroy(): void {
    console.log('Fechou o task-list')
    clearInterval(this.interval)
  }

  selectedTask(task: Task){
    // mandando a task (emitindo a task)
    //  vai dizer "ei, vc foi clicado"
    this.handleTask.emit(task)
  }

  handleFilter(filter:string){
    console.log(filter)
  }

  

}
