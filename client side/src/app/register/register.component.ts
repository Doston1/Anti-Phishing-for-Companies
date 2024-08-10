import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {User} from '../user';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
  })
export class RegisterComponent implements OnInit {
    loading = false;
    submitted = false;
    u : User;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
    ) { 
        // redirect to home if already logged in
        }
    

    ngOnInit() {
    }

    // convenience getter for easy access to form fields

    add(firstname:string,lastname:string,email:string,password:string) {
        this.submitted = true;
        this.loading = true;
         this.u = {firstName:firstname,lastName:lastname,email:email,password:password,token:"123",current:"active",modified:"0"};
        this.userService.register(this.u)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }
}
