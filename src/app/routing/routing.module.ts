import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../app.component';
import { PocetnaComponent } from '../pocetna/pocetna.component';
import { OnamaComponent } from '../onama/onama.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pocetna',
    pathMatch: 'full'
  },
  {
    path: 'pocetna',
    component: PocetnaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'onama',
    component: OnamaComponent,
  },

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class RoutingModule { }