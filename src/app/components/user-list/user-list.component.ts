import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = 'List of users'
  
  dataSource: User[] = [
    {
      id: null,
      email: null,
      password: null,
      sex: null,
      direction: null
    }
  ]

  displayedColumns: string[] = ['email', 'sex', 'direction'];

  constructor(private userService: UserService) {
    this.list()
  }

  ngOnInit() {}

  list() {
    this.userService.list()
      .subscribe((res: any) => {
        this.dataSource = res.data
      }, (err) => {
        alert(err.message)
      })
  }

}
