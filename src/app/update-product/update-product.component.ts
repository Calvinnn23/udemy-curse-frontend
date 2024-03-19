import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent {
  product: Product = new Product();
  id: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (error: any) => console.log(error),
    });
  }

  onSubmit() {
    this.saveProduct();
  }
  saveProduct() {
    this.productService.updateProduct(this.id, this.product).subscribe({
      next: (data) => this.goToProductList(),
      error: (error) => console.log(error),
    });
  }

  goToProductList() {
    this.router.navigate(['/productos']);
  }
}
