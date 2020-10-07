import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

    ngOnInit(): void {
    }

    public signUp(): void {
        this.router.navigate(['signup']);
    }

    public login(): void {
        this.router.navigate(['login']);
    }


}
