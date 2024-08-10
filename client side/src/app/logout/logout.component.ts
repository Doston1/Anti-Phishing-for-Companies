import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
) { }

  ngOnInit() {
  }
  logout(){
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }  

}
