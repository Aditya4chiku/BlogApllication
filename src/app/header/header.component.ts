import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title:string
  constructor(private _auth:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.title="Login"
  }

  logout=()=>{
     sessionStorage.clear();
    this._auth.navigateUser();
  }

}
