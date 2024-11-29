import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
     // Регистрируем корневой компонент
  ],
  imports: [
    BrowserModule,
  ],
  providers: [], // Провайдеры на уровне приложения
  bootstrap: [], // Запуск приложения с корневого компонента
})
export class AppModule {}
