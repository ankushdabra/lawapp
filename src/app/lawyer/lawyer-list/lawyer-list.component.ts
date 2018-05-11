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
    ),
    new LawyerListModel(
      'Sushil Bali',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Vivek Nasa',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Prabhat Shroff',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
  ];

  breakpoint: number;
  constructor() {}

  ngOnInit() {
  }

}
