import { Component, OnInit } from '@angular/core';
import{NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import{AuthService} from "../../../Auth/auth.service"
@Component({
  selector: 'app-eatersignup',
  templateUrl: './eatersignup.component.html',
  styleUrls: ['./eatersignup.component.css']
})
export class EatersignupComponent implements OnInit {
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
    this.authService.eatercreateUser(form.value.email, form.value.password);
  }
 
}