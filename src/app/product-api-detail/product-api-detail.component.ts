import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-api-detail',
  templateUrl: './product-api-detail.component.html',
  styleUrls: ['./product-api-detail.component.css'],
})
export class ProductAPIDetailComponent implements OnInit {
  product?: IProduct;
  // color?: IProduct;
  // producList: IProduct[] = [];
  loading: boolean = true;
  cheap?: string;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService
          .getProduct(Number(params['productId'])).subscribe({
            next: (data: IProduct) => {
            this.product = data;
            this.cheap = (this.product?.price as number) < 21 ? 'red' : 'green';
            this.loading = false;
            },
            error: (errror:any) => {
              console.error(errror);
              this.loading = false;
            }
            
          });
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
