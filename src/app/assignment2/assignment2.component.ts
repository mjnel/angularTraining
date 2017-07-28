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
  // this.buttonClicks.push(this.buttonClicks.length + 1);
  this.buttonClicks.push(new Date());

  }






}
