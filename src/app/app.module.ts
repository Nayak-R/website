import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
