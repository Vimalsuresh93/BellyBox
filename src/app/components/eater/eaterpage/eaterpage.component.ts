import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../../foodservice.service';
import { Food } from '../../food.model';
@Component({
  selector: 'app-eaterpage',
  templateUrl: './eaterpage.component.html',
  styleUrls: ['./eaterpage.component.css']
})
export class EaterpageComponent implements OnInit {

  constructor(private foodservice :FoodserviceService ) { }
foods
  ngOnInit() {
    this.foodservice.geteaterfood().subscribe((data)=>{
      this.foods=JSON.parse(JSON.stringify(data));
      console.log(this.foods)
    })
  }

}
