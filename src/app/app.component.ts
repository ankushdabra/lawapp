import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Law App';

  sidenavOpened: boolean = true;
  sidenavMode: string = 'side';

  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
  }

  ngonInit() {
    this.handleResizeWindow(window.innerWidth);
  }

  private handleResizeWindow(width: number) {
    this.sidenavOpened = true;
    this.sidenavMode = 'side';
    // if (800 < width) {
    //   // for wide screen
    //   this.sidenavOpened = true;
    //   this.sidenavMode = 'side';
    // } else {
    //   // for mobile
    //   this.sidenavOpened = false;
    //   this.sidenavMode = 'over';
    // }
  }
}
