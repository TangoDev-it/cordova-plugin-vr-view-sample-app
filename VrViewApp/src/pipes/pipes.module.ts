import { NgModule } from '@angular/core';
import { MediaSampleIsLocalPipe } from './media-sample-is-local/media-sample-is-local';
import { MediaSampleInputTypePipe } from './media-sample-input-type/media-sample-input-type';
import { MediaSampleInputFormatPipe } from './media-sample-input-format/media-sample-input-format';
@NgModule({
	declarations: [
        MediaSampleIsLocalPipe,
        MediaSampleInputTypePipe,
        MediaSampleInputFormatPipe
    ],
	imports: [],
	exports: [
        MediaSampleIsLocalPipe,
        MediaSampleInputTypePipe,
        MediaSampleInputFormatPipe
    ]
})
export class PipesModule {}
