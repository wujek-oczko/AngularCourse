import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'dead';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'alive!!' : 'dead :(';
    this.serverID = Math.round(Math.random() * 10);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'alive!!' ? 'green' : 'red';
  }
}
