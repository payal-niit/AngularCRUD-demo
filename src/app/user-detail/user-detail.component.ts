import { Component, OnInit, Input} from '@angular/core';
import { user } from '../user'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() us: user;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService, 
    private location:Location
  ) { }

  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => this.us = user);
  }

  goBack():void {
    this.location.back();
  }

  save() {
    this.userService.updateUser(this.us)
    .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getUserById();
  }

}
