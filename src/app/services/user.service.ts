import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_ENDPOINT = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  save(user: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.API_ENDPOINT + '/user/create', user, {headers: headers});
  }

  list() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.API_ENDPOINT + '/user/list', {headers: headers});
  }

}
