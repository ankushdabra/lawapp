import { Component, OnInit } from '@angular/core';
import { LawyerListModel } from './lawyer-list.model';

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  data: LawyerListModel[] = [
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
  ];

  breakpoint: number;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
