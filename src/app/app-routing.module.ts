import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppViewComponent } from './app-view/app-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component'




const routes: Routes = [
  {path : 'appareil', component:AppViewComponent},
  {path : 'appareil/:id', component:SingleAppareilComponent},

  {path : 'auth', component: AuthComponent},
  {path: '', component:AppViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
