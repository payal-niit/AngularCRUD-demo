import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient , HttpClientModule , HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'http://localhost:8080/SpringMVCMiddleware/';

  // getUsers(): Observable <user[]> {
  //   return of (USERS);
  // }
  searchUser(term: string): Observable<user[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<user[]>(`${this.url}search/${term}`);
  }

  getUsers():Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

  getUserById(userId: number): Observable<user> {
    const getByIdUrl=`${this.url}/${userId}`;
    //return of (USERS.find(user => user.id === id));
    return this.http.get<user>(getByIdUrl);
  }

  updateUser(user:user):Observable<any> {
    return this.http.put(this.url, user, httpOptions)
  }

  deleteUser (us: user | number): Observable<user> {
    const id = typeof us === 'number' ? us : us.userId;
    const deleteurl = `${this.url}${id}`;

    return this.http.delete<user>(deleteurl, httpOptions);
  }

  addUser(us:user) {
    console.log(us.username);
    return this.http.post<user>(this.url,us,httpOptions);
  }
  constructor(
    private http:HttpClient

  ) { }
  


}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
