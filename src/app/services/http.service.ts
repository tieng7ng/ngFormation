import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  /**
 * 
 */
  public getUsers(): Observable<User[]> {
    console.log('user - service : getUsers');


    let url = '';
    console.log('>>> url ', url);
    /*
    return new Observable<User>(subscriber => {
      this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(json => 
        json.forEach(item =>
          subscriber.next(item)))
    });
    */
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
