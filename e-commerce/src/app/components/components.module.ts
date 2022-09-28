import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NavigatorComponent } from './navigator/navigator.component';
import { DataListComponent } from './data-list/data-list.component';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { DataCardComponent } from './data-card/data-card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';



@NgModule({
  declarations: [
    NavigatorComponent,
    DataListComponent,
    BasicModalComponent,
    DataCardComponent,
    SearchInputComponent,
    BasicButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavigatorComponent,
    DataListComponent,
    BasicModalComponent,
    DataCardComponent,
    SearchInputComponent,
    BasicButtonComponent
  ]
})
export class ComponentsModule { }
