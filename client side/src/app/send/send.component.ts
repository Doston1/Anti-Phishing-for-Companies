import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { Experiment } from '../experiment';
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor(private userService:UserService) { }
  emails=[];
  exp:Experiment;
  ngOnInit() {
  }

  plus(email){
    var sol = window.confirm("Do want to add " + email+ "user to list?");
    if(sol){  // validate email 
      this.emails.push(email);
      
    }
  }
 // minus()
  sendit()
  { 
    this.exp={Experiment_id:localStorage.getItem("currentExe"),name:localStorage.getItem("currentExeName"),manager_id:localStorage.getItem("currentUser"),template_id:"5c89a19567bf8f3aac54aea5",user_ids:null,users:this.emails,last_pos:"0"}
     this.userService.updateusers(this.exp);
     console.log(this.userService.PrintUsers(this.exp));
     this.userService.Send(this.exp);
     console.log("work")
  }
}


