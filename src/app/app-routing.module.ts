import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view-modules/login-screen/login/login.component';
import { SanctionScreeningComponent } from './view-modules/transaction-screening/sanction-screening/sanction-screening.component';

const routes: Routes = [
  {path : '',
   pathMatch : 'full',
  component : LoginComponent},
  {path : 'sanctions-screening',
  component : SanctionScreeningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
