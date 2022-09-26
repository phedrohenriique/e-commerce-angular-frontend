import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { NavigatorComponent } from './navigator/navigator.component';



@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class ComponentsModule { }
