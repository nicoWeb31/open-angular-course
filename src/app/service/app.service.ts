import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'


@Injectable({
  providedIn: 'root'
})
export class AppService {



  appSubject = new Subject<any[]>()

  private appareilNa = [
    {
      id:1,
      name:'machine a laver',
      status:'alumer'
    },
    {
      id:2,
      name:'frigo',
      status:'alumer'
    },
    {
      id:3,
      name:'television',
      status:'eteint'
    }
  ]


  constructor() { }


  EmitAppSubject(){
    //slice copie du tableau
    this.appSubject.next(this.appareilNa.slice())
  }




  //get by id
  getAppById(id: number){

    let appreil = this.appareilNa.find(
      (appareilObject)=>{
      console.log("AppService -> getAppById -> appareilObject", appareilObject)
        return appareilObject.id === id
      }
    );
    return appreil

  }



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
    appereil.status = 'eteint';
  }
  this.EmitAppSubject();
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
