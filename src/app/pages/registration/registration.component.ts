import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  registration() {

    if(this.email == ''){
      alert('Please enter email');
      return
    }
    if(this.password == ''){
      alert('Please enter password');
      return
    }

    this.auth.registration(this.email, this.password);

    this.email = '';
    this.password = '';
  }


}
