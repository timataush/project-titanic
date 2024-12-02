import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Корневой компонент
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment/environment';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import {AuthorizationComponent} from './pages/authorization/authorization.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Firebase
    AngularFirestoreModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    AuthorizationComponent,
    // Firestore
  ],
  providers: [], // Провайдеры на уровне приложения
  bootstrap: [AppComponent], // Запуск приложения с корневого компонента
})
export class AppModule {}

