import { Routes } from '@angular/router';
import {AuthorizationComponent} from './pages/authorization/authorization.component';
import {RegistrationComponent} from './pages/registration/registration.component';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent}
];
