import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-signup-user',
  templateUrl: './dialog-signup-user.component.html',
  styleUrls: ['./dialog-signup-user.component.css']
})
export class DialogSignupUserComponent implements OnInit {
  signupForm: FormGroup;
  option = 1;

  constructor(
    private matSignupDialogRef: MatDialogRef<DialogSignupUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null),
      userName: new FormControl(null),
      rgoptions: new FormControl(this.option),
      registrationNumber: new FormControl(null)
    });
  }
}
