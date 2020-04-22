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
    url: string = environment.baseUrl + 'auth-service/';

    constructor(private router: Router, private _httpClient: HttpClient) {}

    addUser(user: User): Observable<any> {
        console.log('Inside add user of service ');
        console.log(user);
        return this._httpClient.post<any>(this.url + 'users', user);
        this.router.navigate(['login']);
    }
}
