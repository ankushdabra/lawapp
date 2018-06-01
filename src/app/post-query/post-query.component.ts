import { Component, OnInit } from '@angular/core';
import { PostQueryModel } from './post-query.model';

@Component({
  selector: 'app-post-query',
  templateUrl: './post-query.component.html',
  styleUrls: ['./post-query.component.css']
})
export class PostQueryComponent implements OnInit {
  selectedCategory = 'c1';
  title: string ;
  queryContent: string;
  queryArray: Array<PostQueryModel> = [new PostQueryModel('1', 'One'), new PostQueryModel('2', 'Two')];

  constructor() { }

  ngOnInit() {
  }

}
