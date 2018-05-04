import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data = [
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Madan Bhatiwal',
      practiceTime: 'Practicing Since:2009',
      location: 'Kolkata',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
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
