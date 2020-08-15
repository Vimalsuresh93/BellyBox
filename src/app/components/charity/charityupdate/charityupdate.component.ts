import { Component, OnInit } from '@angular/core';
import { FoodserviceService} from '..//..//foodservice.service';
import{Router} from '@angular/router';
import{Food} from '../../food.model'
@Component({
  selector: 'app-charityupdate',
  templateUrl: './charityupdate.component.html',
  styleUrls: ['./charityupdate.component.css']
})
export class CharityupdateComponent implements OnInit {

  constructor(private foodservice:FoodserviceService,private router:Router) { }
  foodItem=new Food(null,null,null,null,null,null)
  ngOnInit() { this.foodItem=this.foodservice.getoldfooddata();}
  onupdatefood(newfooddata){
    this.foodservice.updatecharityfood(newfooddata).subscribe((result)=>{
      if(JSON.parse(JSON.stringify(result)).status=="Success"){
        this.router.navigateByUrl("",{skipLocationChange:true}).then(()=>{
          this.router.navigate(["charitypageComponent"])
        })
      }
    else{
      alert("Error");
    }
    })
      }
}
