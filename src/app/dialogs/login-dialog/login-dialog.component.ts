import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { inject } from '@angular/core/src/render3';
import { DialogSignupUserComponent } from '../dialog-signup-user/dialog-signup-user.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  hide = true;

  constructor(
    private dialogSignup: MatDialog,
    private matDialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

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
