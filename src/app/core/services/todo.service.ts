import { Injectable } from '@angular/core';
import { Todo } from '../folder/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getAllData(){
    return JSON.parse(localStorage.getItem('todoList'))
  }

  deleteTask(data:Todo[]){
    localStorage.setItem('todoList', JSON.stringify(data))
    return true

  }
  addTask(data:Todo[]){
    localStorage.setItem('todoList', JSON.stringify(data))
    return true

  }
  editTask(data:Todo[]){
    localStorage.setItem('todoList', JSON.stringify(data))
    return true
  }
}
