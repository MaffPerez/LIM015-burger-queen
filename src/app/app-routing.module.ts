import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/viewserver/navbar/navbar.component'
import { TakeorderComponent } from './components/viewserver/takeorder/takeorder.component'
import { StatusorderComponent } from './components/viewserver/statusorder/statusorder.component'


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'viewserver/statusorder', component:StatusorderComponent},
  {path:'viewserver/takeorder', component:TakeorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
