import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  handleClickMenu(event) {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }
}
