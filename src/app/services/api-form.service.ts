import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFormService {

  constructor(public http:HttpClient) { }
  getApi(){
    return this.http.get('https://api.github.com/users')
  }
}
