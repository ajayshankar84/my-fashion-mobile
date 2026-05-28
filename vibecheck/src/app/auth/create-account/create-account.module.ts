import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateAccountPage } from './create-account.page';
import { CreateAccountRoutingModule } from './create-account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountRoutingModule
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountModule {}