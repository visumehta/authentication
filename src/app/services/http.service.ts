import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string =  'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  login(username: string, password:string): Observable<string> {
    return this.http.get<string>(`${this.url}?username=${username}&password=${password}`).pipe(map((res:any) => {            
      if (res.length) {
        localStorage.setItem('user', JSON.stringify(res));
        return res;
      }else{
        throw new Error("Invalid User Credentials");
      }
    }))
  }

  isLoggedIn():boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } 
    return false;
  }


  getAllProducts() {
   return this.http.get('https://dummyjson.com/products');
  }
}
