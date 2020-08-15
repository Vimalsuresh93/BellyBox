import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from "../../Auth/auth.service"

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userIsAuthenticated = false;
 private authListenerSub:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authListenerSub=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
    });
  }
  onLogout(){
    this.authService.logout();
  }

}
