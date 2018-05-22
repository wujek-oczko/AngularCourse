import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'Mistrzu';

  isUsernameEmpty() {
    if (this.username === '') {
      return true;
    } else {
      return false;
    }
  }

  resetUser() {
    this.username = '';
  }
}
