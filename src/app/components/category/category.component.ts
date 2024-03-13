import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { CategoryResponseModel } from '../../models/categoryRwsponseModel';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  // apiUrl= "https://localhost:7280/api/Category/getall";
  // categories:Category[]=[]; 
  
  // constructor(private httpClient:HttpClient) {

  //   this.getProducts();
  // }


  // getProducts(){
  //   this.httpClient.get<CategoryResponseModel>(this.apiUrl).subscribe(response=>{

  //     this.categories=response.data;
  //   });
  //  }


  categories:Category[]=[]; 
  currentCategory:Category; 
  
  constructor(private categoryService:CategoryService) {

    this.getCategories();
  }


  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{

      this.categories=response.data;
    });
   }

   setCurrentCategory(category:Category){
     
    this.currentCategory=category;

  }

  getCurrentCategoryClass(category:Category){
     
    if(category==this.currentCategory)
     return "list-group-item active"
    else
    return "list-group-item"



  }
  
}
