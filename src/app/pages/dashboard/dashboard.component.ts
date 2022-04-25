import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'src/app/core/folder/task.model';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  inputValue: Todo = {
    content: "",
  }
  editValue: boolean = false;
  allTodoList: any;
  totalCount: any;
  allTaskList: Todo[] = [];
  inputId: any;
  constructor(public snackBar: MatSnackBar,private todo:TodoService) {
  }
  ngOnInit() {
    this.getTodoData();
  }
 getTodoData() {

    this.allTaskList = this.todo.getAllData();
    this.allTaskList = this.allTaskList || []
    this.totalCount = this.allTaskList?.length;
      
  }

  addNewItem() {
    if (this.inputValue.content != "") {
      this.inputValue.id = this.allTaskList?.length
      this.allTaskList.push(this.inputValue)
        if(this.todo.addTask(this.allTaskList)){
          this.openSnackBar("Task added successfully", "Dismiss");
            this.getTodoData();
        }else{
          this.openSnackBar("Somthing went wrong!", "Dismiss");
        }
      this.inputValue.content = "";
    }
  }

  deleteItem(i) {
    this.allTaskList.forEach( (item, index) => {
      if(item.id === i) this.allTaskList.splice(index,1);
    });
    if(this.todo.deleteTask(this.allTaskList)){
     
      this.openSnackBar("task Deleted!", "Dismiss");
      this.getTodoData();
    }
    
  }
  editItem(i) {
    this.editValue = true;
    this.inputId = i.id; 
    this.inputValue.content = i.content
   
  }
 
  saveNewItem() {
    if (this.inputValue.content != "") {
      this.allTaskList.forEach( (item, index) => {
        if(item.id === this.inputId){
          this.allTaskList[index].content = this.inputValue.content;
        } 
      });
      if(this.todo.editTask(this.allTaskList)){
        this.openSnackBar("Updated Successfuly!", "Dismiss");
        this.getTodoData();
      }
      this.editValue = false;
      this.inputValue.content = "";
     
    }
  }
 


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }


}
