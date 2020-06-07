import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

}
