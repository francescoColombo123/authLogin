import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UtentiComponent } from './features/utenti/utenti.component';
import { DettagliUtentiComponent } from './features/dettagli-utenti/dettagli-utenti.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/AuthGuard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'utenti', component: UtentiComponent, canActivate: [ AuthGuard ]},
  {path: 'utenti/:id', component: DettagliUtentiComponent,  canActivate: [ AuthGuard ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
