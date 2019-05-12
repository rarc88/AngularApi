import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  title: string = 'Signin'
  user: any = {
    email: null,
    password: null
  }

  constructor() {}

  ngOnInit() {}

  signin() {}

}
