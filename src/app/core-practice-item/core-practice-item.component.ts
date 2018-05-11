import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-core-practice-item',
  templateUrl: './core-practice-item.component.html',
  styleUrls: ['./core-practice-item.component.css']
})
export class CorePracticeItemComponent implements OnInit {

  @Input() item: {
    name: String;
    practiceTime: String;
    location: String;
    about: String;
  };
  constructor() { }

  ngOnInit() {
  }

}
