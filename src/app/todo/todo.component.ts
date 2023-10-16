import { Component } from '@angular/core';
interface TodoInterface{
  Todotype:String
  Todotime:String
  }

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public todotype=""
  public todotime=""
 
  public todoArray:TodoInterface[]=[]
  
  addTodo(){
    console.log(this.todotime);
    let todoObject={
      Todotype:this.todotype,
      Todotime:this.todotime,
    }
    console.log(todoObject);
    this.todoArray.push(todoObject)
    console.log(this.todoArray);
  }
}
