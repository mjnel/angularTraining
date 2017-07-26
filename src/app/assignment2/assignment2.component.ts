import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  buttonStatus = "block";
  buttonClicks = [];
  status = false;

  constructor() {  
  }

  ngOnInit() {
  }

clickButton(){

  this.status = !this.status;

  this.buttonClicks.push(this.buttonClicks.length + 1);
 
   if (this.buttonStatus === "block"){
    return this.buttonStatus = "none";
  }else {
    return this.buttonStatus ="block";
  }
  }

counterFunction(){
  if(this.buttonClicks.length >= 5){
    return true
  }else {
    return false
  }

}




}
