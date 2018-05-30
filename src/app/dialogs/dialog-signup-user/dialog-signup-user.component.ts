import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-signup-user',
  templateUrl: './dialog-signup-user.component.html',
  styleUrls: ['./dialog-signup-user.component.css']
})
export class DialogSignupUserComponent implements OnInit {
  signupForm: FormGroup;
  option = 1;
  password: String;
  confirmPassword: String;
  pwdPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(
    private matSignupDialogRef: MatDialogRef<DialogSignupUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      rgoptions: new FormControl(this.option, Validators.required),
      registrationNumber: new FormControl(null, Validators.required),
      courtName: new FormControl(null, Validators.required),
      chamberNumber: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pwdPattern)
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pwdPattern)
      ])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
