import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public authService: AuthenticationService, public userService: UserService) { }

    isLoggedIn: boolean = false;

    ngOnInit(): void {
    }


    loggedIn(): boolean {
        if (this.authService.loggedIn) {
            this.isLoggedIn = true;
            return true
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    }

    exit() {
        window.location.reload();
    }
}
