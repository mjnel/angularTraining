import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit { 

  allowNewServer = true;
  severCreationStatus = "No server was created!";
  serverName ="Test Server";
  serverCreated: boolean = false;
  servers = ['testServer', 'testSever2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = false;
    }, 2000)
    
  }

  ngOnInit() {
  }


onUpdateServerName (event: any){
  this.serverName = (<HTMLInputElement>event.target).value
}

  onCreateServer(){
    this.severCreationStatus = "Server was created! Name is "+ this.serverName ;
    this.servers.push(this.serverName);
    this.serverCreated = true;
}

}
