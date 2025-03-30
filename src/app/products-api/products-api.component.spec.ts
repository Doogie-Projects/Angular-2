import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAPIComponent } from './products-api.component';

describe('ProductsAPIComponent', () => {
  let component: ProductsAPIComponent;
  let fixture: ComponentFixture<ProductsAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAPIComponent]
    });
    fixture = TestBed.createComponent(ProductsAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
