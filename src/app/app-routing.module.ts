import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/register/register.component';

import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './Pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:'login',
     component:LoginComponent,
     pathMatch:'full'
  },
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
 },
 {
  path:'sign-up',
  component:RegisterComponent,
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
