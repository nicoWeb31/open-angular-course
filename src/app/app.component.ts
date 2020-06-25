import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  lastUpdate = new Promise((resolve,reject)=>{
    const date = new Date();
    setTimeout(()=>{
      resolve(date)
    },2000)
  });
  isAuth: boolean = false;
  title = 'Toto';
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

  constructor(){

    setTimeout(()=>{this.isAuth=true},4000)


  }

  onSubmit(){
    console.log('tout alumer')
  }


}
