import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppService } from './app.service';
import { AuthComponent } from './auth/auth.component';
import { AppViewComponent } from './app-view/app-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    AppareilComponent,
    AuthComponent,
    AppViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
