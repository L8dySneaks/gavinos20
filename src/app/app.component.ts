import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello';

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  })

  private setTitle = () => {
    const timestamp =  new Date().getMilliseconds();
    this.title = `Gavino\'s Pizza (${timestamp})`;
  }

  private changeTitle(callback) {
      setTimeout(() => {
        callback();
      }, 2000);
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  constructor() {
    // this.changeTitle(this.setTitle);
    // this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
  }
}
