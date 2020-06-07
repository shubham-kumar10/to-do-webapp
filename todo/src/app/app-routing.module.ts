import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SignUpComponent } from './signup/signup.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'tasks', component: ListTodosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: TaskFormComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
