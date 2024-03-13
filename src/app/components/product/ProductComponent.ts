import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 

  products:Product[]=[]; 
 
  


  constructor(private productService:ProductService, private activedRoute:ActivatedRoute) {

      this.activedRoute.params.subscribe(params=>{
        if(params["categoryId"]){
           this.getProductsByCategoryId(params["categoryId"])
        }
        else{
          this.getProducts();
        }
      })

    
  }


  getProducts(){
    this.productService.getProducts().subscribe(response=>{

      this.products=response.data;
    });
   }


   getProductsByCategoryId(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{

      this.products=response.data;
    });
   }

  

}
