import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { TaskCardComponent } from './components/task/task-card/task-card.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskViewComponent } from './components/task/task-view/task-view.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    TaskFormComponent,
    TaskCardComponent,
    TaskListComponent,
    TaskViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
