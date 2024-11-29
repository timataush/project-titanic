import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Корневой компонент
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment/environment';

@NgModule({
  declarations: [
    AppComponent, // Регистрируем корневой компонент
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Firebase
    AngularFirestoreModule, // Firestore
  ],
  providers: [], // Провайдеры на уровне приложения
  bootstrap: [AppComponent], // Запуск приложения с корневого компонента
})
export class AppModule {}
