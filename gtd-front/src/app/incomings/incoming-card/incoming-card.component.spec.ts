import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingCardComponent } from './incoming-card.component';

describe('IncomingCardComponent', () => {
  let component: IncomingCardComponent;
  let fixture: ComponentFixture<IncomingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
