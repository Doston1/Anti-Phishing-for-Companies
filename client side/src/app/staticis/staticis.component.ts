import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-staticis',
  templateUrl: './staticis.component.html',
  styleUrls: ['./staticis.component.css']
})
export class StaticisComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
show()
{
 console.log(this.userService.statistics())
}
}
