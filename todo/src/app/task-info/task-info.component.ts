import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
    selector: 'app-task-info',
    templateUrl: './task-info.component.html',
    styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

    @Input() data: Task;
    constructor() { }

    ngOnInit(): void {
    }

}
