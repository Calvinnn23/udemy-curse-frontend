import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    //   Cargar todos los productos
    this.getProducts();
  }

  private getProducts() {
    //  Consumir datos del observable (subscribirnos)
    this.productService.getProductsList().subscribe((data) => {
      this.products = data;
    });
  }

  updateProduct(idProduct: number) {
    this.router.navigate(['editar-producto', idProduct]);
  }

  deleteProduct(idProduct: number) {
    this.productService.deleteProduct(idProduct).subscribe({
      next: (data) => this.getProducts(),
      error: (error) => console.log(error),
    });
  }
}
