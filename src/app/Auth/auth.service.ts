import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
import{HttpClient} from "@angular/common/http";
import{AuthData} from "./authdata-model"
import { Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class AuthService {
private isAuthenticated =false;
private token:string;
private authStatusListener = new Subject<boolean>();
  constructor(private http:HttpClient,private router:Router) { }
  getToken(){
    return this.token;
  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }
  createUser(email:string,password:string){
    const authData:AuthData = {email:email,password:password};
    this.http.post("http://localhost:3000/user/signup",authData)
    .subscribe(()=>{
      this.router.navigate(["/donorlogin"]);
    }, error => {
      this.authStatusListener.next(false);
          });
  }
  login(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{token:string}>("http://localhost:3000/user/login",authData)
    .subscribe(response=>{
     const token=response.token;
     this.token = token;
     if(token){
       this.isAuthenticated=true;
      this.authStatusListener.next(true);
      this.router.navigate(["/donorpage"])
     }
     
    },error=>{this.authStatusListener.next(false);})
  }

  logout(){
    this.token=null;
    this.isAuthenticated=false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }

  eatercreateUser(email:string,password:string){
    const authData:AuthData ={email:email,password:password};
    this.http.post("http://localhost:3000/user/eatersignup",authData)
    .subscribe(()=>{
           this.router.navigate(["/eaterlogin"]);
    },error=>{
      this.authStatusListener.next(false);
    });
  }

  eaterlogin(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{token:string}>("http://localhost:3000/user/eaterlogin",authData)
    .subscribe(response=>{
     const token=response.token;
     this.token = token;
     if(token){
       this.isAuthenticated=true;
      this.authStatusListener.next(true);
      this.router.navigate(["/eaterpage"])
     }
     
    },error=>{this.authStatusListener.next(false);})
  }

  createcharityUser(email:string,password:string){
    const authData:AuthData ={email:email,password:password};
    this.http.post("http://localhost:3000/user/charityusersignup",authData)
    .subscribe(()=>{
      
      this.router.navigate(["/charitylogin"])
    },error=>{
      this.authStatusListener.next(false);
    })
  }
 

  charityuserlogin(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{token:string}>("http://localhost:3000/user/charityuserlogin",authData)
    .subscribe(response=>{
     const token=response.token;
     this.token = token;
     if(token){
       this.isAuthenticated=true;
      this.authStatusListener.next(true);
      this.router.navigate(["/charitypageComponent"])
     }
     
    },error=>{this.authStatusListener.next(false);})
  }

  herocreateUser(email:string,password:string){
    const authData:AuthData ={email:email,password:password};
    this.http.post("http://localhost:3000/user/herosignup",authData)
    .subscribe(()=>{
     
      this.router.navigate(["/herologin"])
    },error=>{
      this.authStatusListener.next(false);
    })
  }
  herologin(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{token:string}>("http://localhost:3000/user/herologin",authData)
    .subscribe(response=>{
     const token=response.token;
     this.token = token;
     if(token){
       this.isAuthenticated=true;
      this.authStatusListener.next(true);
      this.router.navigate(["/heropage"])
     }
     
    },error=>{this.authStatusListener.next(false);})
  }
 

  createshelterUser(email:string,password:string){
    const authData:AuthData = {email:email,password:password};
    this.http.post("http://localhost:3000/user/sheltersignup",authData)
    .subscribe(()=>{
      this.router.navigate(["/shelterlogin"]);
    }, error => {
      this.authStatusListener.next(false);
          });
  }


  shelterlogin(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{token:string}>("http://localhost:3000/user/shelterlogin",authData)
    .subscribe(response=>{
     const token=response.token;
     this.token = token;
     if(token){
       this.isAuthenticated=true;
      this.authStatusListener.next(true);
      this.router.navigate(["/shelterpage"])
     }
     
    },error=>{this.authStatusListener.next(false);})
  }

}

