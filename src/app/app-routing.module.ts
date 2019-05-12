import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'create',
        loadChildren: './components/user-form/user-form.module#UserFormModule'
      },
      {
        path: 'list',
        loadChildren: './components/user-list/user-list.module#UserListModule'
      },
      {
        path: 'signin',
        loadChildren: './components/user-signin/user-signin.module#UserSigninModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
