import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../../foodservice.service';
@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent implements OnInit {

  constructor(private foodservice :FoodserviceService ) { }
  foods
  ngOnInit() { this.foodservice.getherofood().subscribe((data)=>{
    this.foods=JSON.parse(JSON.stringify(data));
    console.log(this.foods)
  })
  }

}
