import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  breakpoint: number;
  states = ['Delhi', 'Haryana', 'Uttar Pradesh', 'Uttarakhand'];

  constructor() {}

  ngOnInit() {
  }

}
