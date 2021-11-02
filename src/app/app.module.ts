import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/viewserver/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat';
import { TakeorderComponent } from './components/viewserver/takeorder/takeorder.component';
import { StatusorderComponent } from './components/viewserver/statusorder/statusorder.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TakeorderComponent,
    StatusorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
