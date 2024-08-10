import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-experiment',
  templateUrl: './all-experiment.component.html',
  styleUrls: ['./all-experiment.component.css']
})
export class AllExperimentComponent implements OnInit {
  constructor(private userService:UserService,private route: ActivatedRoute,
    private router: Router
) { }
  experiments;
  ngOnInit() {
    this.gatAll();
  }
  select(e){
    console.log(e._id);
    localStorage.setItem("currentExe", e._id);
    localStorage.setItem("currentExeName", e.name);
    this.router.navigate(['/send']);

  }
  gatAll() {

    // stop here if form is invalid
    this.userService.getAll()
        .subscribe(
            data => {
               // this.router.navigate(['/home']);
                this.experiments= data;
                console.log(this.experiments);
            },
            error => {
               // this.loading = false;
            });
    }


}
