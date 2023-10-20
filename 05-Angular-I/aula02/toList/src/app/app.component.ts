import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/models/task.model';

// cria um "modelo" pro nosso objeto
export interface IListTask {
  title: string;
  description: string;
  date: Date;
}


export declare interface Remover{
  remover():void;
} 

// Recebe todo o modelo da IListTask + o status
export interface IListComplet extends IListTask{
  status: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, Remover{
  // um array de IListTasks (Array de objetos) >>> IListTask[] 
  // essa "Task" é a minha model task.model.ts
  listTask: Task[] = [];
  listTaskComplet:IListComplet[] = []

  isVisible = true;

  // Variável criada. O valor dela é passado no 'handleTask'
  selectedTask: Task | null = null;

  constructor(){
    console.log('constructor')
  }


  ngOnInit(){
    console.log('INICIEI APP')
    this.listTask.push({
      date: new Date(),
      description: 'tarefa adicionada pelo metodo OnInit',
      title: 'Tarefa OnInit'
    })
  }

  remover(): void {}

  onAddTask(task: IListTask) {
    // console.log(task)
    this.listTask.push(task);
  }

  mostrarLista(){
    this.isVisible = !this.isVisible;
  }

  //  Aqui a variável "selectedTask" recebe um valor
  //  recebe uma task e passa essa task para a variavel selectedTask (essa variavel vai no app.html)
  //  Quando clicar no ngFor (app.html) vai passar o valor da task (task of tasks) para a função handle e receber aqui
  handleTaskApp(task: Task){
    this.selectedTask = task;
  }
 
  
  fecharDetalhes() {
    this.selectedTask = null;
  }

}
