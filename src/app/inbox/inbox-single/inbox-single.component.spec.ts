import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxSingleComponent } from './inbox-single.component';

describe('InboxSingleComponent', () => {
  let component: InboxSingleComponent;
  let fixture: ComponentFixture<InboxSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
