import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { user } from '../user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  users$: Observable<user[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService:UserService) { }

  search(term: string):void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.users$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime (3000),
 
      // ignore new term if same as previous term
      distinctUntilChanged(), 
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchUser(term)),
    );
  }

}
