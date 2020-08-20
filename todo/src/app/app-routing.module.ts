import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SignUpComponent } from './signup/signup.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DarkHeaderComponent } from './dark-header/dark-header.component';

const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'tasks', component: ListTodosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: TaskFormComponent },
    { path: 'nav', component: SidebarComponent },
    { path: '**', component: ErrorComponent },
    { path: 'dark', component: DarkHeaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
