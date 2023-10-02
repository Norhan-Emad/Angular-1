import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl:'./contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputNameValue:string="";
  inputAgeValue:any ="";
  inputEmailValue:any ="" ;
  inputPasswordValue :any="";

}
