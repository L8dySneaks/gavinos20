import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Special #1';

  onLike() {
        window.alert(`I like ${this.title}`);
  }
}
