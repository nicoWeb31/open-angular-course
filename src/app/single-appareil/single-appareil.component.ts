import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {


  name: string ='aspi en dur'
  status: string = 'alumer en dur'


  constructor(
    private appServ: AppService,
    //activatedRoute por recup le param de l'id
    private routeAct: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.routeAct.snapshot.params['id'];
    console.log("SingleAppareilComponent -> ngOnInit -> id", id)


    this.name = this.appServ.getAppById(+id).name;
    console.log("SingleAppareilComponent -> ngOnInit -> this.name", this.name)
    
    this.status = this.appServ.getAppById(+id).status
    console.log("SingleAppareilComponent -> ngOnInit -> this.status", this.status)
  }

}
