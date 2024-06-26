import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertComponent } from './product-alert.component';

describe('ProductAlertComponent', () => {
  let component: ProductAlertComponent;
  let fixture: ComponentFixture<ProductAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
