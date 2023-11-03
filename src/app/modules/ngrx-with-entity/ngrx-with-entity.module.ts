import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxWithEntityRoutingModule } from './ngrx-with-entity-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgrxWithEntityComponent } from './ngrx-with-entity.component';


@NgModule({
  declarations: [
    ProductListComponent,
    NgrxWithEntityComponent
  ],
  imports: [
    CommonModule,
    NgrxWithEntityRoutingModule
  ]
})
export class NgrxWithEntityModule { }
