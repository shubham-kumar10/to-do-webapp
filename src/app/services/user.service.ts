import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public url: string = environment.baseUrl;
    public isBussiness: boolean;
    constructor(private _httpClient: HttpClient) { }

    public firstname: string;
    public lastname: string;
    public userid: string;

    addUser(user: User): Observable<any> {
        console.log("Inside add user of service ")
        console.log(user)
        return this._httpClient.post<any>(this.url + "signUp", user)
    }

    getUser() {

    }
}
