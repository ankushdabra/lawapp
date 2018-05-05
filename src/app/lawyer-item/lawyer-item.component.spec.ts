import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerItemComponent } from './lawyer-item.component';

describe('LawyerItemComponent', () => {
  let component: LawyerItemComponent;
  let fixture: ComponentFixture<LawyerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
