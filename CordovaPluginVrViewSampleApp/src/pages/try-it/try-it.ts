import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { VrViewProvider } from '../../providers/vr-view/vr-view';

@IonicPage()
@Component({
  selector: 'page-try-it',
  templateUrl: 'try-it.html',
})
export class TryItPage {
  mediaSample: MediaSampleModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vrView: VrViewProvider
  ) {
    this.mediaSample = new MediaSampleModel();
    this.mediaSample.type = "VIDEO";
    this.mediaSample.inputType = "TYPE_MONO";
    this.mediaSample.inputFormat = "FORMAT_DEFAULT";
    this.mediaSample.isLocal = false;
  }

  ionViewDidLoad() {}

  onClickSubmitForm() {
    this.vrView.playMediaSample(this.mediaSample);
  }

}
