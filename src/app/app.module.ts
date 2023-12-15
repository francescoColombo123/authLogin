import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { UtentiComponent } from './features/utenti/utenti.component';
import { HttpClientModule } from '@angular/common/http';
import { DettagliUtentiComponent } from './features/dettagli-utenti/dettagli-utenti.component';
import { LoginComponent } from './core/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtentiComponent,
    DettagliUtentiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
