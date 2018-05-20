import { Pipe, PipeTransform } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Pipe({
  name: 'mediaSampleInputType',
})
export class MediaSampleInputTypePipe implements PipeTransform {
  transform(value: MediaSampleModel, ...args) {
    var labelInputType;
    if(value.inputType == "TYPE_MONO") {
      labelInputType = "Mono";
    } else if(value.inputType == "TYPE_STEREO_OVER_UNDER") {
      labelInputType = "Top bottom";
    }

    return labelInputType;
  }
}
