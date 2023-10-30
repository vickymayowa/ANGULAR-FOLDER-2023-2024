import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface FoodInterface {
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:string,
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  public subBehaviour = new BehaviorSubject<FoodInterface>({
    name:'',
    price:0,
    quantity:0,
    category:'',
    availability:'',
  })
}
