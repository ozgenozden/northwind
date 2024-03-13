import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ProductComponent } from './components/product/ProductComponent';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [

    {path:"", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"categories", component:CategoryComponent},
    {path:"products/category/:categoryId", component:ProductComponent}
];
