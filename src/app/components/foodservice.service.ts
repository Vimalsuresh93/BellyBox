import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "./food.model";
import{Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  constructor(private http:HttpClient,private router:Router) { }
food=new Food(null,null,null,null,null,null)
  
getoldfooddata(){
return this.food;
  }

setoldfooddata(oldfooddata){
    this.food=oldfooddata;
  }

addFood(food){
  
 return this.http.post("http://localhost:3000/addfood",{"newfood":food}).subscribe((data)=>{if (JSON.parse(JSON.stringify(data)).status=="Success"){
  this.router.navigateByUrl("",{skipLocationChange:true}).then(()=>{
    this.router.navigate(["donorpage"])
  })
    }
  
    })

}
 getfood(){
  return this.http.get("http://localhost:3000/getfood")
 }
 deletefood(delID){
   return this.http.post("http://localhost:3000/deletefood",{deleteId:delID});
 }
 updatefood(newfooddata){
   return this.http.post("http://localhost:3000/updatefood",newfooddata);
 } 

 
 geteaterfood(){
   return this.http.get("http://localhost:3000/geteaterfood")
 }

 addcharityfood(food){
    return this.http.post("http://localhost:3000/addcharityfood",{"newfood":food}).subscribe((data)=>{if (JSON.parse(JSON.stringify(data)).status=="Success"){
   this.router.navigateByUrl("",{skipLocationChange:true}).then(()=>{
     this.router.navigate(["charitypageComponent"])
   })}})
 
 }

 getcharityfood(){
  return this.http.get("http://localhost:3000/getcharityfood")
 }
 
 deletecharityfood(delID){
  return this.http.post("http://localhost:3000/deletecharityfood",{deleteId:delID});
}

updatecharityfood(newfooddata){
  return this.http.post("http://localhost:3000/updatecharityfood",newfooddata);
} 
getherofood(){
  return this.http.get("http://localhost:3000/getherofood")
 }
 getshelterfood(){
  return this.http.get("http://localhost:3000/getshelterfood")
 }
}
