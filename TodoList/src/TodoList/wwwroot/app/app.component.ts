import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo'
import { TodoService } from '../services/todoservice';


@Component({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [TodoService]

})
export class AppComponent implements OnInit {

    todoList: Todo[];

    newTodoName: string;

    isLoading: boolean;

    constructor(private todoService: TodoService) {
        this.newTodoName = '';
        this.isLoading = true;
    }

    ngOnInit(): void {
        this.todoService.getTodos()
            .subscribe(todos => this.todoList = todos,
            error => console.log(error),
            this.finallyHttpRequest);
    }

    addTodoItem(): void {
        if (this.newTodoName.length > 0) {
            this.isLoading = true;
            var todo = new Todo(this.newTodoName);
            this.todoService.addTodo(todo)
                .subscribe(todo => {
                    if (todo.id > 0) {
                        this.todoList.push(todo);
                        this.newTodoName = '';
                    }
                    else {
                        alert("could not save error message");
                    }
                },
                error => console.log(error),
                this.finallyHttpRequest);
        }
    }

    deleteTodoItem(id: number) {
        this.todoService.deleteTodo(id).subscribe(() => {
            this.todoList = this.todoList.filter(item => item.id !== id);
        },
            this.finallyHttpRequest)
    }

    todoChange(todo: Todo) {
        todo.isCompleted = !todo.isCompleted;
        this.todoService.updateTodo(todo).subscribe(this.finallyHttpRequest);
    }

    hasTodos(): boolean {
        return this.todoList && this.todoList.length > 0;
    }

    finallyHttpRequest(): void {
        this.isLoading = false;
        console.log(this.isLoading);
    }

}