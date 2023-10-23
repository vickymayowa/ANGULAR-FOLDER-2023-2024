import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(public getApi:HttpClient) { }
  getApiArray(){
    return this.getApi.get('https://jsonplaceholder.typicode.com/users')
  }
}
