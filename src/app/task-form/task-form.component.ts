import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { ListService } from '../services/list.service';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    public taskForm: FormGroup;
    public task: Task;
    public error: String;
    public taskCreated: boolean;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private listService: ListService
    ) { }

    ngOnInit() {
        this.taskForm = this.formBuilder.group({
            title: ['', [
                Validators.required,
            ]],
            description: ['', [
                Validators.required
            ]],
        })
    }
    public get title() {
        return this.taskForm.get('title');
    }
    public get description() {
        return this.taskForm.get('description');
    }

    public addTask(): void {
        this.task = {
            id: null,
            description: this.taskForm.value['description'],
            title: this.taskForm.value['title'],
            endDate: null,
            startDate: null,
            isCompleted: false,
            label: "label"
        };
        this.listService.addTask(this.task).subscribe(data => {
            this.taskCreated = true;
            this.error = "Task Added Successfully"
            console.log(data)
            this.router.navigate['tasks'];
        },
            error => {
                console.log("error")
                if (error.status == 400) {
                    this.error = "User Already Exists";
                    this.taskCreated = false;
                }
                console.log(this.error);
            }
        );
        this.router.navigate(['tasks'])
    }
}
