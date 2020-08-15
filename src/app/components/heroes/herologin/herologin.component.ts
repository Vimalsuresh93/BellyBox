import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,NgForm  } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AuthService} from "../../../Auth/auth.service"
@Component({
  selector: 'app-herologin',
  templateUrl: './herologin.component.html',
  styleUrls: ['./herologin.component.css']
})
export class HerologinComponent implements OnInit {
  isLoading=false;
  private authStatusSub:Subscription;
  constructor(public authService:AuthService) { }
  onLogin(form: NgForm) {
    if (form.invalid) {
      alert("INVALID LOGIN CREDENTIAL")
      return;
    }

    this.isLoading=true;
   this.authService.herologin(form.value.email,form.value.password);
   
  }
  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus=>{
        this.isLoading=false;
      }
    )
  }

}
