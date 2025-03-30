import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products-api',
  templateUrl: './products-api.component.html',
  styleUrls: ['./products-api.component.css']
})
export class ProductsAPIComponent implements OnInit {

  productsList : IProduct[] = [];

  constructor( private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      // console.log(data);
      this.productsList = data;
    }
    );
  }




}
