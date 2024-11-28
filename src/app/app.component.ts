import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorizationComponent} from './pages/authorization/authorization.component';
import {RegistrationComponent} from './pages/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorizationComponent, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-titanic';
}
