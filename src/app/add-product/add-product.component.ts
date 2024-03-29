import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}
  onSubmit() {
    this.addProduct();
  }
  addProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: (data) => {
        this.goProductList();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  goProductList() {
    this.router.navigate(['/productos']);
  }
}
