import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  servers = ['testServer','testServer2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = `server was created and the name is  "${this.serverName}" `;
    this.servers.push(this.serverName);
  }
  // onUpdateServerName(event: any) {
  //   console.log(event.target.value);
  
  //   this.serverName = event.target.value;
  // }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
