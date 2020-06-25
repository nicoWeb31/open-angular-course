import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  appareilNa = [
    {
      'name':'machine a laver',
      'status':'alumer'
    },
    {
      'name':'frigo',
      'status':'alumer'
    },
    {
      'name':'television',
      'status':'eteint'
    }
  ]

  constructor() { }



  //switchOnAll
  switchOnAll(){

    for(let appereil of this.appareilNa){
      appereil.status = 'alumer';
      console.log("AppService -> switchOnAll -> appereil.status", appereil.status)
      
    }

  }

  //switchOffAll
switchOffAll(){

  for(let appereil of this.appareilNa){
    appereil.status = 'eteint'
  }
}


//switchOn
switchOnID(index: number){
  this.appareilNa[index].status = 'alumer'
}


//switchOff
switchOffID(index: number){
  this.appareilNa[index].status = 'eteint'
}



}
