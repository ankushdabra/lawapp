import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lawyer-item',
  templateUrl: './lawyer-item.component.html',
  styleUrls: ['./lawyer-item.component.css']
})
export class LawyerItemComponent implements OnInit {
 @Input() item: {
    name: String;
    practiceTime: String;
    location: String;
    about: String;
  };

  constructor() {}

  ngOnInit() {}
}
