import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import{AuthService} from "../../../Auth/auth.service"
@Component({
  selector: 'app-herosignup',
  templateUrl: './herosignup.component.html',
  styleUrls: ['./herosignup.component.css']
})
export class HerosignupComponent implements OnInit {
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
    this.authService.herocreateUser(form.value.email, form.value.password);
  }
   
  }