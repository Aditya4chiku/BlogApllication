import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  user = new User()
  constructor(private auth: AuthService) { }

  RegisterUser = () => {
    this.auth.resterUser(this.user).subscribe(data => {
      console.log(data)
    },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
  }

}
