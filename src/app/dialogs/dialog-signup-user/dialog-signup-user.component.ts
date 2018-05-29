import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-signup-user',
  templateUrl: './dialog-signup-user.component.html',
  styleUrls: ['./dialog-signup-user.component.css']
})
export class DialogSignupUserComponent implements OnInit {
   options = 2;

  constructor(
    private matSignupDialogRef: MatDialogRef<DialogSignupUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    console.log(form);
  }
}
