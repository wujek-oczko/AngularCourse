import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph: boolean = false;
  clicks = [];
  isGreater: boolean = false;

  toggleParagraph(event: Event) {
    console.log(event);
    this.clicks.push(new Date().toLocaleTimeString());
    this.displayParagraph = !this.displayParagraph;
    if (this.clicks.length > 5) {
      this.isGreater = true;
    }
  }

  getBackground() {
    return this.isGreater === true ? 'blue' : 'white';
  }
}
