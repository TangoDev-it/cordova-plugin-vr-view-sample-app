import { Pipe, PipeTransform } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Pipe({
  name: 'mediaSampleInputFormat',
})
export class MediaSampleInputFormatPipe implements PipeTransform {
  
  transform(value: MediaSampleModel, ...args) {
    var labelInputFormat;
    if(value.inputFormat == "FORMAT_DEFAULT") {
      labelInputFormat = "Mp4";
    } else if(value.inputFormat == "FORMAT_HLS") {
      labelInputFormat = "HLS";
    } else if(value.inputFormat == "FORMAT_DASH") {
      labelInputFormat = "DASH";
    }

    return labelInputFormat;
  }
}
