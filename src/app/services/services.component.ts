import { Component, OnInit } from '@angular/core';
import { LawyerListModel } from '../lawyer/lawyer-list/lawyer-list.model';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  breakpoint: number;
  states = ['Delhi', 'Haryana', 'Uttar Pradesh', 'Uttarakhand'];
  data: LawyerListModel[] = [
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'Madan Bhatiwal',
      'Practicing Since:2009',
      'Kolkata',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
  ];
  constructor() {}

  ngOnInit() {
  }

}
