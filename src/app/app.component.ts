import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-titanic';

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('test').valueChanges().subscribe(data => {
      console.log(data); // Отладочная информация
    });
  }
}
