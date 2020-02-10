import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingDetailsComponent } from './incoming-details.component';

describe('IncomingDetailsComponent', () => {
  let component: IncomingDetailsComponent;
  let fixture: ComponentFixture<IncomingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
