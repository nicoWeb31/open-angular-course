import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppViewComponent } from './app-view/app-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGardService } from './service/auth-gard.service';




const routes: Routes = [
  {path : 'appareil',canActivate:[AuthGardService],component:AppViewComponent},
  {path : 'appareil/:id', component:SingleAppareilComponent},
  {path : 'auth', component: AuthComponent},
  {path: '', component:AppViewComponent},
  {path: 'not-found', component:FourOhFourComponent},
  {path: '**', redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
