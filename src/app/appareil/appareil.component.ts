import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  appareilName: string ='machine a laver';
  appareilStatue: string ='eteint'

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatue
  }

}
