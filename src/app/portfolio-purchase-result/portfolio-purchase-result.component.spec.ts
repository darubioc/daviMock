import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPurchaseResultComponent } from './portfolio-purchase-result.component';

describe('PortfolioPurchaseResultComponent', () => {
  let component: PortfolioPurchaseResultComponent;
  let fixture: ComponentFixture<PortfolioPurchaseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPurchaseResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPurchaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
