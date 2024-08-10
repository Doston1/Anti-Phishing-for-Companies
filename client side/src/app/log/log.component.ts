import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-log',
  templateUrl: 'log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
    }

    ngOnInit() {

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    logout(){

    }
    isLoggedIn(){
        
    }

    login(username, password) {
        this.submitted = true;
        // stop here if form is invalid
        this.loading = true;
        this.authenticationService.login(username, password)
            .pipe(first())
            .subscribe(
                data => {
                    if(data!="000")
                    {
                    this.router.navigate(['/allexperiment']);}
                },
                error => {
                    this.loading = false;
                });
    }
}
