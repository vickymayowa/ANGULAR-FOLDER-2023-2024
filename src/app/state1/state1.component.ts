import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

interface FoodInterface {
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:string,
}
@Component({
  selector: 'app-state1',
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.css']
})
export class State1Component {
  constructor(public itemService:StateService){}
  public foodItems:FoodInterface[]= [
    {
      name:'rice',
      price:2000,
      quantity:20,
      category:'Foodstuff',
      availability:'available',
    },
    {
      name:'Beans',
      price:2400,
      quantity:30,
      category:'Foodstuff',
      availability:'non-available',
    },
    {
      name:'Yam',
      price:8000,
      quantity:45,
      category:'Foodstuff',
      availability:'non-available',
    },
    {
      name:'Apple',
      price:7000,
      quantity:34,
      category:'Fruit',
      availability:'available',
    },
  ]
  ngOnInit(){
    console.log(this.itemService);
    
  }
  sendItem(item:FoodInterface){
    console.log(item);
    this.itemService.subBehaviour.next(item)
  }
}
