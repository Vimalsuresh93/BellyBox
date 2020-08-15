import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AuthService} from "../../../Auth/auth.service"

@Component({
  selector: 'app-donorlogin',
  templateUrl: './donorlogin.component.html',
  styleUrls: ['./donorlogin.component.css']
})
export class DonorloginComponent implements OnInit{
 isLoading=false;
 private authStatusSub:Subscription;
  constructor(public authService:AuthService) { }
  onLogin(form: NgForm) {
    if (form.invalid) {
      alert("INVALID LOGIN CREDENTIAL")
      return;
    }
    this.isLoading=true;
   this.authService.login(form.value.email,form.value.password);
   
  }
  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus=>{
        this.isLoading=false;
      }
    )
  }
}
