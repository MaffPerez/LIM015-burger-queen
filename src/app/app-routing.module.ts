import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TakeorderComponent } from './components/viewserver/takeorder/takeorder.component'
import { StatusorderComponent } from './components/viewserver/statusorder/statusorder.component'
import { PendingOrderComponent } from './components/viewchef/pending-order/pending-order.component';
import { OrderFinishedComponent } from './components/viewchef/order-finished/order-finished.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'viewserver/status-order', component:StatusorderComponent},
  {path:'viewserver/take-order', component:TakeorderComponent},
  {path:'viewchef/pending-order', component:PendingOrderComponent},
  {path:'viewchef/order-finished', component:OrderFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
