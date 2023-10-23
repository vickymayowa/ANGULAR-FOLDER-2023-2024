import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contactArray:number[]=[1,23,434,5455,]
  constructor() { }
  getcontactArray(){
    return this.contactArray
  }
  getcreateContactArray(){
    return JSON.parse(localStorage['contactDetails'])
  }
}
