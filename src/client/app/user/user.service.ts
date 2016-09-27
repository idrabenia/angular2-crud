import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UserService {
  private readonly SERVER_API = 'http://localhost:3000/api';
  private httpOptions: any;

  constructor(private http: Http) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage['idToken']}`
    });

    this.httpOptions = new RequestOptions({ headers: headers });
  }

  query() {
    return this.http
      .get(`${this.SERVER_API}/user`, this.httpOptions)
      .catch(this.processError);
  }

  findById(id: string) {
    return this.http
      .get(`${this.SERVER_API}/user/${id}`, this.httpOptions)
      .catch(this.processError);
  }

  save(user: any) {
    return this.http
      .post(`${this.SERVER_API}/user`, JSON.stringify(user), this.httpOptions);
  }

  update(user: any) {
    return this.http
      .post(`${this.SERVER_API}/user/${user._id}`, JSON.stringify(user), this.httpOptions);
  }

  deleteUser(id: string) {
    return this.http
      .delete(`${this.SERVER_API}/user/${id}`, this.httpOptions);
  }

  private processError(error: any, result: any): any {
    console.log(error);
  }
}