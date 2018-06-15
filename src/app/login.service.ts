import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { user } from './user';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:8080/SpringMVCMiddleware/authenticate";
  
  authenticate(us:user) {
    console.log(us.username);
    return this.http.post<user>(this.loginUrl,us,httpOptions);
  }

}


