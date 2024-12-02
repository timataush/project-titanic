import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Userdata} from '../models/userdata';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('token', 'true')
      this.router.navigate(['dashboard'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/auth'])
    })
  }

//register method
  registration(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/auth']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/registration']);
    })
  }

//sign out
  logout() {
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('token');
    this.router.navigate(['/auth'])
  }, err => {
  alert(err.message);
  })
  }

}
