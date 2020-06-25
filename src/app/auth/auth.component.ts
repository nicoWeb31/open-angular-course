import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus: boolean;

  constructor(
    private authServ :AuthService,
    private router :Router 
  ) { }

  ngOnInit(): void {
    this.authStatus = this.authServ.isAuth
  }
  
  
  onSignin(){
    this.authServ.signIn()
    .then(()=>{
      this.authStatus = this.authServ.isAuth
      console.log("AuthComponent -> ngOnInit -> this.authStatus", this.authStatus)
      this.router.navigate(['appareil'])
    })
  }


  onSignout(){
    this.authServ.signout()
    this.authStatus = this.authServ.isAuth
    console.log("AuthComponent -> ngOnInit -> this.authStatus", this.authStatus)
  }





}
