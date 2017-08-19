import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  infoText : SafeHtml;
  errorMessage : string;
  isLoading: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    private sanitizer: DomSanitizer
  ) {
  }

  ionViewDidLoad() {
    this.loadInfoText();
  }

  loadInfoText() {
    this.isLoading = true;
    this.api.getInfoText()
    .subscribe(
      infoText => {
        this.isLoading = false;
        this.infoText = this.sanitizer.bypassSecurityTrustHtml(infoText);
      },
      error => {
        this.isLoading = false;
        this.errorMessage;
      }
    );
  }

}
