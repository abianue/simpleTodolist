import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

    constructor(private http: Http) { }

    baseUrl: string = 'api/todo';

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => <Todo[]>response.json())
            .catch(this.handleException);
    }

    addTodo(todo: Todo): Observable<Todo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl, JSON.stringify(todo), options)
            .map((response: Response) => <Todo>response.json())
            .catch(this.handleException);
    }

    deleteTodo(id: number): Observable<void> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.delete(this.baseUrl + '/' + id, options)
            .map((response: Response) => { })
            .catch(this.handleException);
    }

    updateTodo(todo: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.put(this.baseUrl, todo, options)
            .map((response: Response) => { })
            .catch(this.handleException);
    }

    handleException(error: Response) {
        return Observable.throw(error || 'Server error');
    }

}

