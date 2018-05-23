import { Component, OnInit } from '@angular/core';
import { LawyerListModel } from '../lawyer/lawyer-list/lawyer-list.model';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { AuthenticationDialogComponent } from '../dialogs/authentication-dialog/authentication-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openDialog() {
    this.dialog.open(AuthenticationDialogComponent, {
      data: { name: 'Angular' }
    });
  }
}

