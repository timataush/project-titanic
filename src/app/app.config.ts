import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"project-titanic-6259e","appId":"1:23490364445:web:c0d81f852a199e1be232f4","storageBucket":"project-titanic-6259e.firebasestorage.app","apiKey":"AIzaSyDNW42PEWHMnisDa027RAPxFxFPovAbZ-A","authDomain":"project-titanic-6259e.firebaseapp.com","messagingSenderId":"23490364445"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
