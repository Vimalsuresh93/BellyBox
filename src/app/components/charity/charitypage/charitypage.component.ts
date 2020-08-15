import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,NgForm } from '@angular/forms';
import{Router} from '@angular/router';
import { FoodserviceService } from '../../foodservice.service';
import { Food } from '../../food.model';
@Component({
  selector: 'app-charitypage',
  templateUrl: './charitypage.component.html',
  styleUrls: ['./charitypage.component.css']
})
export class CharitypageComponent implements OnInit {

  constructor(private foodservice:FoodserviceService,private router:Router) { }
  
  foodItem=new Food (null,null,null,null,null,null,);
  getfoods;
 
 onaddfood(){
   
   console.log(this.foodItem);
   this.foodservice.addcharityfood(this.foodItem) 
 }

 ngOnInit() { this.foodservice.getcharityfood().subscribe((data)=>{
     this.getfoods=JSON.parse(JSON.stringify(data));
     console.log(this.getfoods)
   })
  
 }
ondeletefood(delid){
 this.foodservice.deletecharityfood(delid).subscribe((data)=>{if (JSON.parse(JSON.stringify(data)).status=="Success"){
this.router.navigateByUrl("",{skipLocationChange:true}).then(()=>{
 this.router.navigate(["charitypageComponent"])
})
 }

 })

}
updatefood(oldfooddata){
 this.foodservice.setoldfooddata(oldfooddata);
 this.router.navigate(["charity/update"]);
}


}
