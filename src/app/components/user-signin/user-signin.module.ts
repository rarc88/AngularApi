import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSigninRoutingModule } from './user-signin-routing.module';
import { UserSigninComponent } from './user-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserSigninComponent],
  imports: [
    CommonModule,
    UserSigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class UserSigninModule { }
