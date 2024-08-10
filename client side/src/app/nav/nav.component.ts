import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { StringDecoder } from 'string_decoder';
import { Key } from 'protractor';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  txtlog = "login";
  isLoggedIn= false ;
  appTitle: string = 'my app';
  constructor(private authService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
) { }

  ngOnInit() {
  }
  loginCheck(){
    if(localStorage.getItem("currentUser") != "000"&&localStorage.getItem("currentUser") != null )
    {
        return true;
    }
    else {
        return false;
    }
  }
  
}
