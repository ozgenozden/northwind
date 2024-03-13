import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl= "https://localhost:7280/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts() :Observable<ListResponseModel<Product>>
  { 
    let newApiUrl= this.apiUrl+"Product/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newApiUrl);
  } 

  getProductsByCategoryId(categoryId:number) :Observable<ListResponseModel<Product>>
  { 
    let newApiUrl= this.apiUrl+"Product/getByCategoryId?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newApiUrl);
  } 
}
