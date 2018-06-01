
export class PostQueryModel {
  title: String;
  category: String;
  subCategory: String;
  description: String;


  constructor(title: String, category: String, subCategory: String, description: String) {
    this.title = title;
    this.category = category;
    this.subCategory = subCategory;
    this.description = description;
  }
}
