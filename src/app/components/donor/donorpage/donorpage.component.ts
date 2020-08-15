import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,NgForm } from '@angular/forms';
import{Router} from '@angular/router';
import { FoodserviceService } from '../../foodservice.service';
import { Food } from '../../food.model';
import { CharityloginComponent } from '../../charity/charitylogin/charitylogin.component';

@Component({
  selector: 'app-donorpage',
  templateUrl: './donorpage.component.html',
  styleUrls: ['./donorpage.component.css']
})
export class DonorpageComponent implements OnInit {
   constructor(private foodservice:FoodserviceService,private router:Router) { }
   
    getfoods;
   foodItem=new Food (null,null,null,null,null,null,);
  onaddfood(){
    
    console.log(this.foodItem);
    this.foodservice.addFood(this.foodItem) 
  }

  ngOnInit() { this.foodservice.getfood().subscribe((data)=>{
      this.getfoods=JSON.parse(JSON.stringify(data));
      console.log(this.getfoods)
    })
   
  }
ondeletefood(delid){
  this.foodservice.deletefood(delid).subscribe((data)=>{if (JSON.parse(JSON.stringify(data)).status=="Success"){
this.router.navigateByUrl("",{skipLocationChange:true}).then(()=>{
  this.router.navigate(["donorpage"])
})
  }

  })
 
}
updatefood(oldfooddata){
  this.foodservice.setoldfooddata(oldfooddata);
  this.router.navigate(["donor/update"]);
}
charity(charityfood:NgForm){
console.log(charityfood);
}
}


