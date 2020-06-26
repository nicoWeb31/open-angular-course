import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './service/app.service';  
import { Observable, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription

  constructor(){

  }

  ngOnInit(){

    //onsevable
    const counter = Observable.interval(1000);
    //subscrible
    this.counterSubscription = counter.subscribe(
      (value)=>{
        this.secondes = value;
      }
    )

  }


  //destruction 
  ngOnDestroy(){
    this.counterSubscription.unsubscribe()
  }
    


  

}
