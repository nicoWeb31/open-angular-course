import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string ='';
  @Input() appareilStatue: string ='';
  @Input() appareilId;
  @Input() id: number;


  constructor( 
    private appServ: AppService
  ) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatue
  }

  getColor(){
      if(this.appareilStatue === 'eteint'){
      return 'red'
    }else{
      return 'green'
    }

  }


  
  onAlumer(){
    this.appServ.switchOnID(this.appareilId)
    console.log("AppareilComponent -> onAlumer -> this.appareilId", this.appareilId)
    
  }


  onEteindre(){
    this.appServ.switchOffID(this.appareilId)
    console.log("AppareilComponent -> onEteindre -> this.appareilId", this.appareilId)
  }

 

}
