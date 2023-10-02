import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  pathImage1:string ="./assets/images/poert1.png" ;
  pathImage2:string ="./assets/images/port2.png";
  pathImage3:string ="./assets/images/port3.png"
  pathName:string ="";

  show(path:string):void{
    this.pathName=`${path}`;
    console.log(path);
  }
}
