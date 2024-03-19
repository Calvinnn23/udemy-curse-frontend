import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

//  http:localhost:4200/productos
const routes: Routes = [
  { path: 'productos', component: ProductListComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'agregar-producto', component: AddProductComponent },
  { path: 'editar-producto/:id', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
