import { Component, OnInit } from '@angular/core';
import { LawyerListModel } from '../lawyer/lawyer-list/lawyer-list.model';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arraySideNav = ['Lawyer\'s Zone', 'Consumer\'s Zone', 'My Account', 'Edit Account', 'Settings' ];
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe( startWith(''), map(val => this.filter(val)));
  }
  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}

