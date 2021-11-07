import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/viewserver/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat';
import { TakeorderComponent } from './components/viewserver/takeorder/takeorder.component';
import { StatusorderComponent } from './components/viewserver/statusorder/statusorder.component';
import { OrderFinishedComponent } from './components/viewchef/order-finished/order-finished.component';
import { PendingOrderComponent } from './components/viewchef/pending-order/pending-order.component';
import { NavbarChefComponent } from './components/viewchef/navbar-chef/navbar-chef.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TakeorderComponent,
    StatusorderComponent,
    OrderFinishedComponent,
    PendingOrderComponent,
    NavbarChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
