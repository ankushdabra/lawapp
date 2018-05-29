import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { inject } from '@angular/core/src/render3';
import { DialogSignupUserComponent } from '../dialog-signup-user/dialog-signup-user.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  emailValidation: FormControl;
  constructor(
    private dialogSignup: MatDialog,
    private matDialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.emailValidation = new FormControl('', Validators.required);
  }

  public closeLoginDialog() {
    this.matDialogRef.close();
  }

  public openSignupDialog() {
    this.closeLoginDialog();
    this.dialogSignup.open(DialogSignupUserComponent, {
      data: { name: 'Angular' }
    });
  }
}
