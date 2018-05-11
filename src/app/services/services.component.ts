import { Component, OnInit } from '@angular/core';
import { LawyerListModel } from '../lawyer/lawyer-list/lawyer-list.model';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  breakpoint: number;
  states = ['Delhi', 'Haryana', 'Uttar Pradesh', 'Uttarakhand'];
  coreServicesArray: LawyerListModel[] = [
    new LawyerListModel(
      'TALK TO LAWYER',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
  ];

corePracticeArray: LawyerListModel[] = [
    new LawyerListModel(
      'CRIMINAL',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'CIVIL',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'PROPERTY DISPUTE',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'IMMIGRATION',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'MUSLIM LAW',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'MOTOR ACCIDENT',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'INSURANCE LAW',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    new LawyerListModel(
      'CHILD CUSTODY',
      '',
      '',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),

  ];
  constructor() {}

  ngOnInit() {
  }

}
