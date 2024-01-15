import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, retry } from 'rxjs';
import { Register } from '../../shared/interfaces/register';
import { environment } from 'src/environments/environment.development';
import { Login } from '../../shared/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsLogged =new Subject()

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<Register[]>{
    return this.http.get<Register[]>(`${environment.APIURL}/users`).pipe(
      retry(2)
    )
  }

  registerUser(model:Register):Observable<Register>{
    return this.http.post<Register>(`${environment.APIURL}/users`,model).pipe(
      retry(2)
    )
  }

  loginUser(model:Login):Observable<Login>{
    return this.http.put<Login>(`${environment.APIURL}/login/1`,model)
  }

  getUserLogin():Observable<Login>{
    return this.http.get<Login>(`${environment.APIURL}/login/1`)
  }
  
  getUserLoggedSub(){
    return this.userIsLogged
  }
}
