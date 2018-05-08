import { Component, OnInit, NgZone, ViewChild, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Law App';
  arraySideNav = ['Lawyer\'s Zone', 'Consumer\'s Zone', 'My Account', 'Edit Account', 'Settings' ];
  constructor() {
  }

  ngonInit() {
  }
}



