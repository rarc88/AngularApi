import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title: string = ''
  user: User = {
    email: null,
    password: null,
    sex: null,
    direction: null
  }
  id: number = null
  password: string = ''

  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router) {
    this.id = this.activateRoute.snapshot.params['id']
    if(this.id) {
      this.title = 'Edit user'
    } else {
      this.id = null
      this.title = 'Create user'
    }
  }

  ngOnInit() {}

  create() {
    this.userService.save(this.user)
      .subscribe((res: any) => {
        alert(res.message)
        this.router.navigate(['/dashboard'])
      }, (err) => {
        alert(err.message)
      })
  }

}
