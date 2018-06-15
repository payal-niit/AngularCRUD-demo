import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // u:user = {
  //   userId:1,
  //   username:'John',
  //   password:'12345',
  //   phone_number:'1234567890',
  //   email_id:'abc@gmail.com'
  // };
message;
  //users = USERS;
  users:user[];
  
  selectedUser: user;

  getUser(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  u:any={};
  add(): void {
       this.userService.addUser(this.u)
       .subscribe(
        (data)=>
        {this.u=data;
         console.log(data),
         sessionStorage.setItem("user",JSON.stringify(this.u))
       this.router.navigate(['home'])}, 
         (error)=>console.log(error.status)
      )
  }

  delete(us:user):void {
    this.users = this.users.filter(u => u !== us);
    this.userService.deleteUser(us).subscribe();
  }

  onSelect(us:user): void {
    this.selectedUser = us;
    if(us.phone_number.length != 10) {
      this.message='length is greater';
    }
    else {
      this.message='';
    }
  }
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

}
