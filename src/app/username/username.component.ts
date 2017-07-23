import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

userName: string;


  constructor() { }

  ngOnInit() {
  }

userNameCheck (){
  if (this.userName == ""){
      return true;
  }else {
    return false;
  }

}

userNameReset(){
  this.userName = "";
}


}
