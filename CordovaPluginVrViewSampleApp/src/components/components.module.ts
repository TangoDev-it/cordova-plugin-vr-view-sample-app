import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MediaSampleItemComponent } from './media-sample-item/media-sample-item';

@NgModule({
	declarations: [MediaSampleItemComponent],
	imports: [IonicModule.forRoot(MediaSampleItemComponent)],
	exports: [MediaSampleItemComponent]
})
export class ComponentsModule {}
