import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


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


  constructor(
    private appServ : AppService
  ){
    setTimeout(()=>{this.isAuth=true},4000)
  }

  ngOnInit(){
    
    this.appareilNa = this.appServ.appareilNa
    console.log("AppComponent -> ngOnInit -> this.appServ.appareilNa", this.appServ.appareilNa)
    
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
