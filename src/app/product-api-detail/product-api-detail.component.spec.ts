import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAPIDetailComponent } from './product-api-detail.component';

describe('ProductAPIDetailComponent', () => {
  let component: ProductAPIDetailComponent;
  let fixture: ComponentFixture<ProductAPIDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAPIDetailComponent]
    });
    fixture = TestBed.createComponent(ProductAPIDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
