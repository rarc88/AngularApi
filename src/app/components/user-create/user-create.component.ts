import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  title: string = 'Registro de Usuario'
  user: any = {}
  password: string = ''

  constructor() {}

  ngOnInit() {}

  create() {
    console.log(this.user)
  }

}
