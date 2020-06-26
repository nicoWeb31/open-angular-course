import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppService } from './service/app.service';
import { AuthComponent } from './auth/auth.component';
import { AppViewComponent } from './app-view/app-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
// import { AuthGardService } from './service/auth-gard.service';

// const appRoutes: Routes = [
//   {path : 'appareil', component:AppViewComponent},
//   {path : 'auth', component: AuthComponent},
//   {path: '', component:AppViewComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    AppareilComponent,
    AuthComponent,
    AppViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
