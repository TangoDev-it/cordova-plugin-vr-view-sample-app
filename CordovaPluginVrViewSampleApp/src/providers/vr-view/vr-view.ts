import { Injectable } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Injectable()
export class VrViewProvider {

  constructor() { }

  public playMediaSample(mediaSample : MediaSampleModel) {
    console.log("Play");
    console.log(mediaSample);

    if(mediaSample.type == "VIDEO") {
      if(mediaSample.isLocal) {
        window['VrView'].playVideoFromAppFolder(
          mediaSample.url, 
          mediaSample.inputType, 
          mediaSample.inputFormat
        );
      } else {
        window['VrView'].playVideo(
          mediaSample.url, 
          mediaSample.inputType, 
          mediaSample.inputFormat
        );
      }
    } else if(mediaSample.type == "PHOTO") {
      if(mediaSample.isLocal) {
        window['VrView'].showPhotoFromAppFolder(
          mediaSample.url, 
          mediaSample.inputType
        );
      } else {
        window['VrView'].showPhoto(
          mediaSample.url, 
          mediaSample.inputType
        );
      }
    }
  }

}
