import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { TaskFormComponent } from './core/components/task/task-form/task-form.component';
import { TaskViewComponent } from './core/components/task/task-view/task-view.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'tasks', component: TaskViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: TaskFormComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
