export class LawyerListModel {
  name: String;
  practiceTime: String;
  location: String;
  about: String;

  constructor(name: String, practiceTime: String, location: String, about: String) {
    this.name = name;
    this.practiceTime = practiceTime;
    this.location = location;
    this.about = about;
  }
}
