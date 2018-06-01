import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-query-item',
  templateUrl: './post-query-item.component.html',
  styleUrls: ['./post-query-item.component.css']
})
export class PostQueryItemComponent implements OnInit {

  @Input() queryData: {
    title: String;
    category: String;
    subCategory: String;
    description: String;
  };

  constructor() { }

  ngOnInit() {
  }

}
