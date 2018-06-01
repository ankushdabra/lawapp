import { Component, OnInit } from '@angular/core';
import { PostQueryModel } from './post-query.model';

@Component({
  selector: 'app-post-query',
  templateUrl: './post-query.component.html',
  styleUrls: ['./post-query.component.css']
})
export class PostQueryComponent implements OnInit {
  title;
  selectedCategory = 'default';
  selectedSubCategory = 'default';
  description;
  queryArray: Array<PostQueryModel> = [];
  constructor() {}

  ngOnInit() {}

  onClick(title: string, category: string, subCategory: string, description: string) {
    this.queryArray.push(new PostQueryModel(title, category, subCategory, description));
    console.log(this.queryArray);
  }
}
