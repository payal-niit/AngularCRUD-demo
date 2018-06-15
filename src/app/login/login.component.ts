import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { user } from '../user';
import { Router , Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private loginService: LoginService , private router: Router) { }

  u:any={};
  
  login(): void {
    //console.log(this.u.username);
       this.loginService.authenticate(this.u)
       .subscribe(
        (data)=>
        {this.u=data;
         console.log(data),
         sessionStorage.setItem("user",JSON.stringify(this.u))
       this.router.navigate(['home'])}, 
         (error)=>{console.log(error.status),this.router.navigate(['user'])}
      )
  }

  ngOnInit() {
  }

}
