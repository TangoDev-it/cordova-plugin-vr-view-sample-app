import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { ApiProvider } from '../../providers/api/api';
import { VrViewProvider } from '../../providers/vr-view/vr-view';

@IonicPage()
@Component({
  selector: 'page-media-sample',
  templateUrl: 'media-sample.html',
})
export class MediaSamplePage {
  mediaSamples : Array<MediaSampleModel> = [];
  errorMessage : string;
  isLoading: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api: ApiProvider,
    public vrView: VrViewProvider
  ) {}

  ionViewDidLoad() {
    this.loadMediaSamples();
  }

  loadMediaSamples() {
    this.isLoading = true;
    this.api.getMediaSamples()
      .subscribe(
        mediaSamples => {
          this.isLoading = false;
          this.mediaSamples = mediaSamples;
        },
        error => {
          this.isLoading = false;
          this.errorMessage
        }
      );
  }

  onMediaSampleitemClick(mediaSampleElement) {
    this.vrView.playMediaSample(mediaSampleElement);
  }

}
