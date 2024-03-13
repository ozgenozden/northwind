import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

 
import { RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/ProductComponent';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductComponent,CategoryComponent,NaviComponent,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService,CategoryService]
  
})
export class AppComponent {
  title = 'northwind';
  

}