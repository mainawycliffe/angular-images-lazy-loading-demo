import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageItemCollection = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      const url = 'http://via.placeholder.com/500x450?text=Image No ' + (i + 1);

      this.imageItemCollection[i] = {
        url: url,
        show: false
      };
    }
  }
}
