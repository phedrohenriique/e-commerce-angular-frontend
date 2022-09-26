import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule

  ],
  exports: [
    HomeComponent,
    ErrorComponent
  ]
})
export class PagesModule { }
