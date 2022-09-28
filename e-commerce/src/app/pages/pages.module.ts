import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule

  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    ProductsComponent
  ]
})
export class PagesModule { }
