import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


import { RouterOutlet } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductComponent,CategoryComponent,NaviComponent,CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'northwind';
  

}
