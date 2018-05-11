import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePracticeItemComponent } from './core-practice-item.component';

describe('CorePracticeItemComponent', () => {
  let component: CorePracticeItemComponent;
  let fixture: ComponentFixture<CorePracticeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorePracticeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePracticeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
