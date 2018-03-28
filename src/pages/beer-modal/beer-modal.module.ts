import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerModalPage } from './beer-modal';

@NgModule({
  declarations: [
    BeerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerModalPage),
  ],
})
export class BeerModalPageModule {}
