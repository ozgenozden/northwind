import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product1={productName:'Bardak',UnitPrice:34}
  product2={productName:'Kaşık',UnitPrice:23}
  product3={productName:'Tencere',UnitPrice:45}
  product4={productName:'Kavanoz',UnitPrice:67}
  product5={productName:'Tepsi',UnitPrice:78}

  products=[this.product1,this.product2,this.product3,this.product4,this.product5]


}
