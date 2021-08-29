import { Component } from '@angular/core';

interface todoModel {
  label:string
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'todolist';
  todoTxt = '';
  todoList:todoModel[] = [];
  filter = 'all';
  get filterTodoList():todoModel[]{
    if(this.filter=='todo'){
      return this.todoList.filter(function(item){
        return !item.completed
      })
    }
    if(this.filter=='completed'){
      return this.todoList.filter(function(item){
        return item.completed
      })
    }
    return this.todoList;
  }
  addTodo(){
    if(this.todoTxt===''){
      alert('输入内容不能为空');
      return;
    }
    this.todoList.push({
      label:this.todoTxt,
      completed:false
    })
    this.todoTxt='';
  }
  deleteTodo(idx:number){
    this.todoList.splice(idx,1);
  }
}
