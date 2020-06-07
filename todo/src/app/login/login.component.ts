import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public invalidLogin: boolean;
    public error: string = 'Login Failed';

    constructor(
        private formBuild: FormBuilder,
        public authService: AuthenticationService,
        public userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuild.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }

    public getUsername(): string {
        return this.loginForm.value.username;
    }

    public getPassword(): string {
        return this.loginForm.value.password;
    }

    public toSignup(): void {
        this.router.navigate(['signup']);
    }

    public onSubmit(): void {
        this.authService
            .authenticate(this.getUsername(), this.getPassword())
            .subscribe(
                (data) => {
                    console.log(data);
                    this.authService.setToken(data.token);
                    this.error = 'Logged In successfully';
                    this.authService.userId = data.id;
                    this.userService.firstname = data.firstname;
                    this.userService.lastname = data.lastname;
                    this.authService.loggedIn = true;
                    this.authService.validCredentials = true;
                    this.router.navigate(['/tasks']);
                },
                (error) => {
                    this.authService.validCredentials = false;
                    this.invalidLogin = true;
                    if (error.status === 401) {
                        this.error = 'Invalid Username or Password';
                    }
                }
            );
    }
}
