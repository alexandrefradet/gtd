import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingsListComponent } from './incomings-list.component';

describe('IncomingsListComponent', () => {
  let component: IncomingsListComponent;
  let fixture: ComponentFixture<IncomingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
