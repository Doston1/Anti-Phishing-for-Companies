import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { Experiment } from '../experiment';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['./create-experiment.component.css']
})
export class CreateExperimentComponent implements OnInit {
  experiment:Experiment;
  name:string;
  constructor(private userService:UserService,private router: Router) {
    
   }

  ngOnInit() {
  }

  create(Name:string){
    
    console.log("create start");
  console.log("---------------1-");
     console.log("-----------2-----");
     this.experiment = {Experiment_id:"0",name:Name,manager_id:localStorage.getItem("currentUser"),template_id:"5c89a19567bf8f3aac54aea5",user_ids:null,users:null,last_pos:"0"};
    console.log("-----------3-----");
    console.log(this.experiment);
    console.log("--------4--------")

     this.userService.StartExe(this.experiment)
          .subscribe(
        data => {
           // this.router.navigate(['/home']);
           console.log("--------5--------")
           console.log("before data create");
           console.log(data);
           //this.router.navigate(['/allexperiment']);
        },
        error => {
          //  this.loading = false;
          console.log("--------6--------")
          console.log("before data create");

        });



  }

}
