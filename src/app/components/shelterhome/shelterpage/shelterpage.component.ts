import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../../foodservice.service';

@Component({
  selector: 'app-shelterpage',
  templateUrl: './shelterpage.component.html',
  styleUrls: ['./shelterpage.component.css']
})
export class ShelterpageComponent implements OnInit {

  constructor(private foodservice :FoodserviceService) { }
  foods
  ngOnInit() { this.foodservice.getshelterfood().subscribe((data)=>{
    this.foods=JSON.parse(JSON.stringify(data));
    console.log(this.foods)
  })
  }
 

}
