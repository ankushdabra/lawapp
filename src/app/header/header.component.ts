import { Component, ViewEncapsulation, OnInit, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  header = 'Law App';

  @Input()
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    // this.sidenav.mode = 'over';
    this.sidenav.toggle();
  }

}
