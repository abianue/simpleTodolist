"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_1 = require('../models/todo');
var todoservice_1 = require('../services/todoservice');
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.newTodoName = '';
        this.isLoading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos()
            .subscribe(function (todos) { return _this.todoList = todos; }, function (error) { return console.log(error); }, this.finallyHttpRequest);
    };
    AppComponent.prototype.addTodoItem = function () {
        var _this = this;
        if (this.newTodoName.length > 0) {
            this.isLoading = true;
            var todo = new todo_1.Todo(this.newTodoName);
            this.todoService.addTodo(todo)
                .subscribe(function (todo) {
                if (todo.id > 0) {
                    _this.todoList.push(todo);
                    _this.newTodoName = '';
                }
                else {
                    alert("could not save error message");
                }
            }, function (error) { return console.log(error); }, this.finallyHttpRequest);
        }
    };
    AppComponent.prototype.deleteTodoItem = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id).subscribe(function () {
            _this.todoList = _this.todoList.filter(function (item) { return item.id !== id; });
        }, this.finallyHttpRequest);
    };
    AppComponent.prototype.todoChange = function (todo) {
        todo.isCompleted = !todo.isCompleted;
        this.todoService.updateTodo(todo).subscribe(this.finallyHttpRequest);
    };
    AppComponent.prototype.hasTodos = function () {
        return this.todoList && this.todoList.length > 0;
    };
    AppComponent.prototype.finallyHttpRequest = function () {
        this.isLoading = false;
        console.log(this.isLoading);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [todoservice_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todoservice_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map