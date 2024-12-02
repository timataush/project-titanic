import {Component, importProvidersFrom} from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Userdata} from '../../models/userdata';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../../environment/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {

  // user: Userdata = {
  //   email: '',
  //   password: '',
  // };

  email : string = '';
  password: string = '';

  constructor(private auth : AuthService) { }


  login() {
    if(this.email == ''){
      alert('Please enter email');
      return
    }

    if(this.password == ''){
      alert('Please enter password');
      return
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';

  }
// public login(){
//   console.log('12313')
//   this.authService.login({
//     email: 'dscjndsc@gmai.com',
//     password: 'string',
//   })
// }
}
