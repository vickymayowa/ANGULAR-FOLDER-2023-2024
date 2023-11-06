import { Component } from '@angular/core';
import { ApiFormService } from '../services/api-form.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css'],
})
export class ApiFormComponent {
  constructor(public newapi: ApiFormService) {}
  ngOnInit() {
    console.log(this.newapi.getApi());
    this.newapi.getApi().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
