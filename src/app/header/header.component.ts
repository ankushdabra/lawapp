import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arraySideNav = ['Lawyer\'s Zone', 'Consumer\'s Zone', 'My Account', 'Edit Account', 'Settings' ];

  constructor() { }

  ngOnInit() {
  }

}

