import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { ListService } from '../services/list.service';

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

    constructor(private taskService: ListService) { }

    public taskList: Task[];
    ngOnInit(): void {
        this.getTaskList();
    }

    public getTaskList() {
        this.taskService.getTasks().subscribe((data) => {
            this.taskList = data;
        });
    }

}
