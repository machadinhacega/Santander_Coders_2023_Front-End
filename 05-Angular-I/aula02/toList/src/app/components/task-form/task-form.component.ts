import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  @Output() addTask = new EventEmitter()

  public newTask = {
    title: '',
    description: '',
    date: new Date()
  };

  submitTask(){
    // como parâmetro da função addTask coloca o valor q quer mandar para o PAI
    // Quando apertar no botão (submitTask) vai enviar as informações (this.nweTask) pro Pai
    // {...} >>> pra criar uma referencia pra cada task nova
    // DE POIS DE REFATORAR UTILIZANDO MODEL, ESSA LINHA FOI ALTERADA (ver linha 25)
    // this.addTask.emit({...this.newTask}); 
    // NÃO PRECISA DESESTRTURAR POR QUE NAO VAI TER MAIS O PROBLEMA DE REFENCIA COM DO OBJETO
    this.addTask.emit(this.newTask)
    // console.log(this.newTask)
  }

}
