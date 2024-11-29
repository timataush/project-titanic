import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Userdata} from '../../models/userdata';


@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  user: Userdata = {
    email: '',
    password: '',
  };

constructor(private authService: AuthService) {

}

public login(){
  console.log('12313')
}
}
