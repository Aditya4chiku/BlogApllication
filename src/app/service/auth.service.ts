import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/api/user"
  constructor(private http: HttpClient,
    private router: Router

  ) { }


  navigateUser = () => {
    if (this.getUser())
     {
      this.router.navigate(['home'])
    }
    else {
      this.router.navigate(['login']);
    }
  }


  getUser = () => {
    let user = JSON.parse(sessionStorage.getItem("admin"))
    if (user)
      return user
    else
      return null
  }

  resterUser = (user) => {
    return this.http.post(this.url + '/register', user)
  }

  loginValidation = (user) => {
    return this.http.post(this.url + '/login', user)
  }




}
