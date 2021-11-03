import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFinishedComponent } from './order-finished.component';

describe('OrderFinishedComponent', () => {
  let component: OrderFinishedComponent;
  let fixture: ComponentFixture<OrderFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
