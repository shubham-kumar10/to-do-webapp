import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Task } from '../model/task';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root',
})
export class ListService {
    public taskUrl: string = environment.baseUrl;

    constructor(private _httpClient: HttpClient, private userService: UserService,
        private authService: AuthenticationService) { }

    public userId = this.authService.userId;

    addTask(task: Task): Observable<any> {
        console.log("Inside add task of service ")
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
        return this._httpClient.post<any>(this.taskUrl + "add/" + this.userId, task)
    }

    getTasks(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
        return this._httpClient.get<any>(this.taskUrl + "list/" + this.userId);
    }
}
