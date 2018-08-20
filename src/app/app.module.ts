import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { OnamaComponent } from './onama/onama.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddroomComponent } from './addroom/addroom.component';
import { AddhotelComponent } from './addhotel/addhotel.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    OnamaComponent,
    LoginComponent,
    RegistrationComponent,
    AddroomComponent,
    AddhotelComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
