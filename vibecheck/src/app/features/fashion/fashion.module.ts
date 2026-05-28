import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FashionPage } from './fashion.page';
import { FashionRoutingModule } from './fashion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FashionRoutingModule
  ],
  declarations: [FashionPage]
})
export class FashionModule {}