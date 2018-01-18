import { Injectable } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Injectable()
export class VrViewProvider {

  constructor() { }

  public playMediaSample(mediaSample : MediaSampleModel) {
    if(!window['VrView']) {
      console.log("VrView is not defined. Remember that the plugin doesn't work in the browser, you must run the app on a real device!");
      console.log(mediaSample);
      return;
    }

    if(mediaSample.type == "VIDEO") {
      if(mediaSample.isLocal) {
        window['VrView'].playVideoFromAppFolder(
          mediaSample.url, {
            inputType: mediaSample.inputType, 
            inputFormat: mediaSample.inputFormat
          }
        );
      } else {
        window['VrView'].playVideo(
          mediaSample.url, {
            inputType: mediaSample.inputType, 
            inputFormat: mediaSample.inputFormat
          }
        );
      }
    } else if(mediaSample.type == "PHOTO") {
      if(mediaSample.isLocal) {
        window['VrView'].showPhotoFromAppFolder(
          mediaSample.url, {
            inputType: mediaSample.inputType
          }
        );
      } else {
        window['VrView'].showPhoto(
          mediaSample.url, {
            inputType: mediaSample.inputType
          }
        );
      }
    }
  }

  public checkIsDeviceSupported(callback) {
    if(!window['VrView']) {
      callback(1);
      return;
    }
    window['VrView'].isDeviceSupported(callback);
  }

}
