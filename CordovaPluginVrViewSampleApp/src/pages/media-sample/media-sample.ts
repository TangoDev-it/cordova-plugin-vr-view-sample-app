import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-media-sample',
  templateUrl: 'media-sample.html',
})
export class MediaSamplePage {
  mediaSamples = [];
  errorMessage = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {}

  ionViewDidLoad() {
    this.loadMediaSamples();
  }

  loadMediaSamples() {
    this.api.getMediaSamples()
      .subscribe(
        mediaSamples => this.mediaSamples = mediaSamples,
        error =>  this.errorMessage = <any>error
      );
  }

}
