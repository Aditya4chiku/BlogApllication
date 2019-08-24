import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService) { }
user=new User()
  ngOnInit() {
  }
  
  loginData=()=>{
     this._auth.loginValidation(this.user).subscribe(data=>{
       console.log(data)

       console.log("success")
       sessionStorage.setItem("admin",JSON.stringify(data[0]))
       this._auth.navigateUser()
     },
     err=>{
       console.log(err)
     })
  }

}
