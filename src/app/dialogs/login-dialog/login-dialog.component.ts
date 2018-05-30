import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { inject } from '@angular/core/src/render3';
import { DialogSignupUserComponent } from '../dialog-signup-user/dialog-signup-user.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  options = 1;
  loginForm: FormGroup;
  pwdPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';


  constructor(
    private dialogSignup: MatDialog,
    private matDialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {

    this.loginForm = new FormGroup({

      email: new FormControl(null, [Validators.required, Validators.email]),
      rgoptions: new FormControl(this.options, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pwdPattern)
      ]),

    });
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
  onSubmit() {
    console.log(this.loginForm);
  }
}
