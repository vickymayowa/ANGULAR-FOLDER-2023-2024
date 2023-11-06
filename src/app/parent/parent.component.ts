import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public post = ''
  acceptComment = ''

  ngOnInit(){
    console.log(this.post)
  }
  onInputChange(event:any){
    this.post = event.target.value
    console.log(this.post);
  }
  receiveComment(message:string){
    this.acceptComment = message
  }
}
