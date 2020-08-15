import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
import{AuthService} from "../../../Auth/auth.service"

@Component({
  selector: 'app-sheltersignup',
  templateUrl: './sheltersignup.component.html',
  styleUrls: ['./sheltersignup.component.css']
})
export class SheltersignupComponent implements OnInit {
  isLoading=false;
  private authStatusSub:Subscription;
  constructor(public authService:AuthService) { }
  ngOnInit() { 
    this.authStatusSub=this.authService.getAuthStatusListener().subscribe(
   authStatus=>{
     this.isLoading=false;
   }
    );
   }
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
   this.isLoading=true;
    this.authService.createshelterUser(form.value.email, form.value.password);
  }
 

}
