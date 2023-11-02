import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { USER } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string =  'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  login(authUser: any): Observable<USER> {
    return this.http.get<USER>(`${this.url}?username=${authUser.username}&password=${authUser.password}`).pipe(map((res:any) => {      
      if (res.length) {
        localStorage.setItem('user', JSON.stringify(res));
        return res;
      }else{
        throw new Error("Invalid User Credentials");
      }
    }))
  }


  getAllUsers(): Observable<USER[]> {
    return this.http.get<USER[]>(this.url);
  }
}
