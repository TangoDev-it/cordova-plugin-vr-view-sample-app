import { Pipe, PipeTransform } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Pipe({
  name: 'mediaSampleDescription',
})
export class MediaSampleDescriptionPipe implements PipeTransform {
  transform(value: MediaSampleModel, ...args) {
    var description;

    var labelType;
    if(value.type == "VIDEO") {
      labelType = "video";
    } else if(value.type == "PHOTO") {
      labelType = "photo";
    }

    var labelInputType;
    if(value.inputType == "TYPE_MONO") {
      labelInputType = "mono";
    } else if(value.inputType == "TYPE_STEREO_OVER_UNDER") {
      labelInputType = "top bottom";
    }

    var labelInputFormat;
    if(value.inputFormat == "FORMAT_DEFAULT") {
      labelInputFormat = "mp4";
    } else if(value.inputFormat == "FORMAT_HLS") {
      labelInputFormat = "HLS";
    } else if(value.inputFormat == "FORMAT_DASH") {
      labelInputFormat = "DASH";
    }

    var labelIsLocal;
    if(value.isLocal) {
      labelIsLocal = "Local";
    } else {
      labelIsLocal = "Remote";
    }

    description = labelIsLocal + " " + labelType + ", Type: " + labelInputType;

    if(value.type == "VIDEO") {
      description += ", Format: " + labelInputFormat;
    }

    return description;
  }
}
