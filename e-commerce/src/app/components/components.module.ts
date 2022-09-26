import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { NavigatorComponent } from './navigator/navigator.component';
import { DataListComponent } from './data-list/data-list.component';



@NgModule({
  declarations: [
    NavigatorComponent,
    DataListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    NavigatorComponent,
    DataListComponent
  ]
})
export class ComponentsModule { }
