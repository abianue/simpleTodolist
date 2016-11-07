import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TodoService } from '../services/todoservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, CommonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }