import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from '@angular/forms';

import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    public signUpForm: FormGroup;
    public user: User;
    public userCreated: boolean = null;
    public error: string;
    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, this.isUsernameTaken]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            password: ['', [Validators.required]],
            confirmPassword: [
                '',
                [Validators.required, this.matchConfirmPassword.bind(this)],
            ],
        });
    }
    get username() {
        return this.signUpForm.get('username');
    }
    get firstname() {
        return this.signUpForm.get('firstname');
    }
    get lastname() {
        return this.signUpForm.get('lastname');
    }
    get password() {
        return this.signUpForm.get('password');
    }
    get confirmPassword() {
        return this.signUpForm.get('confirmPassword');
    }
    matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
        if (this.signUpForm) {
            if (
                formControl.value &&
                formControl.value.length > 0 &&
                formControl.value !== this.signUpForm.get('password').value
            ) {
                return { nomatch: true };
            }
        }
        return null;
    }
    isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
        if (formControl.value === 'admin') {
            return { userNameTaken: true };
        } else {
            return null;
        }
    }

    addUser() {
        console.log(this.signUpForm.value['firstname']);

        this.user = {
            id: null,
            firstName: this.signUpForm.value['firstname'],
            lastName: this.signUpForm.value['lastname'],
            password: this.signUpForm.value['password'],
            username: this.signUpForm.value['username'],
        };
        this.userService.addUser(this.user).subscribe(
            (data) => {
                this.userCreated = true;
                this.error = 'Signed Up Successfull.Go to Login Page';
                console.log(this.userCreated);
            },
            (error) => {
                console.log('error');
                if (error.status == 400) {
                    this.error = 'User Already Exists';
                    this.userCreated = false;
                }
                console.log(this.error);
            }
        );
    }
}
