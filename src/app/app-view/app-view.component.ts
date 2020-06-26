import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent implements OnInit {

  lastUpdate = new Promise((resolve,reject)=>{
    const date = new Date();
    setTimeout(()=>{
      resolve(date)
    },2000)
  });
  isAuth: boolean = false;
  title = 'Toto';
  appareilNa: any[];
  appSubscrion: Subscription


  constructor(
    private appServ : AppService
  ){
    setTimeout(()=>{this.isAuth=true},4000)
  }

  ngOnInit(){
    
    this.appServ.appSubject.subscribe((appareils: any[])=>{
      this.appareilNa = appareils 

    })

    this.appServ.EmitAppSubject();
  }




  onSubmitOn(){
    console.log('tout alumer')
    this.appServ.switchOnAll();
  }

  onSubmitOff(){
    console.log('tout eteindre')
    this.appServ.switchOffAll();
  }


}
