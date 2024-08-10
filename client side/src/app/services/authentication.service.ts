import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user';
import { NavComponent } from 'src/app/nav/nav.component'
@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient) {
    }
    login(username: string, password: string) {
        return this.http.post<any>('https://bagrut.herokuapp.com/api/manager/search', { "idkey":"5ca6578b31e5ce0f0c8221d2",
        "email":username, "password":password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", user);

                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        console.log("clear");
        localStorage.clear();
        //localStorage.clear();

    }
}