import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    constructor(private router: Router, private signup: UserService) { }

    ngOnInit(): void {
    }

    public signUp(): void {
        this.router.navigate(['signup']);
    }

    public login(): void {
        this.router.navigate(['login'])
    }

}
