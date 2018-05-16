import { Pipe, PipeTransform } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Pipe({
  name: 'mediaSampleIsLocal',
})
export class MediaSampleIsLocalPipe implements PipeTransform {
  transform(value: MediaSampleModel, ...args) {
    var labelIsLocal;
    if(value.isLocal) {
      labelIsLocal = "Local";
    } else {
      labelIsLocal = "Remote";
    }

    return labelIsLocal;
  }
}
