import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
    this.LoggedinUser = JSON.parse(sessionStorage.getItem("user"));
   }
  users: user[];
  LoggedinUser:user;

  
  getUser():void {
    this.userService.getUsers()
    .subscribe(users => this.users=users.slice(0,4));
  }
  ngOnInit() {
    this.getUser();
  }

  

}
