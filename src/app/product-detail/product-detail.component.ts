import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  color?: Product;
  producList: Product[] = productsList

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      // console.log(params['productId']);
      // this.product = params['productId'];
      this.product = this.producList.find(product => product.id == params['productId']);
      // this.color = params['category'];
      this.color = this.producList.find(product => product.color == params['category']);

    });
  }

}
