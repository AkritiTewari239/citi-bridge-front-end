import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanctionScreeningComponent } from './view-modules/transaction-screening/sanction-screening/sanction-screening.component';
import { LoginComponent } from './view-modules/login-screen/login/login.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SanctionScreeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
