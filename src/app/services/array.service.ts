import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  nameArray:number[]=[1,2,3,4,5,6,7]

  public names:string[]=['ojo', 'victor', 'vickydev', 'mayowa', 'oyin']
  constructor(public apihttp:HttpClient) { }
  getArray(){
    return this.nameArray
  }
  getContact(){
    return JSON.parse(localStorage["contactDetails"])
  }
  getApi(){
    return this.apihttp.get('https://api.github.com/users')
  }
  getNames(){
    return this.names
  }
}
