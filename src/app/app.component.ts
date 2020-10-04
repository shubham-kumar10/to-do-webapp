import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'todo';

    constructor(private authService: AuthenticationService, public router: Router) {
    }

    // public ngOnInit(): void {
    //     this.router.navigate(['signup']);
    // }
}
