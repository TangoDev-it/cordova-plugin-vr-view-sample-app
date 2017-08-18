import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TryItPage } from './try-it';

@NgModule({
  declarations: [
    TryItPage,
  ],
  imports: [
    IonicPageModule.forChild(TryItPage),
  ],
})
export class TryItPageModule {}
