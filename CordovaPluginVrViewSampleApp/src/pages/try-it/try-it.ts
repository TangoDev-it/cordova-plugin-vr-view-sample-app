import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { VrViewProvider } from '../../providers/vr-view/vr-view';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-try-it',
  templateUrl: 'try-it.html',
})
export class TryItPage {
  mediaSample: MediaSampleModel;

  constructor(
    public navCtrl: NavController,
    public vrView: VrViewProvider,
    private fileChooser: FileChooser
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

  onClickPickFile() {
    this.fileChooser.open()
      .then(uri => this.mediaSample.url = uri)
      .catch(e => console.log(e));
  }
}
