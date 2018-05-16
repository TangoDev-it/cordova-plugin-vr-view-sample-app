import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { VrViewProvider } from '../../providers/vr-view/vr-view';
import { ToastController } from 'ionic-angular';

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
    public api: ApiProvider,
    private sanitizer: DomSanitizer,
    public toastCtrl: ToastController,
    public vrView: VrViewProvider
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
        this.infoText = this.sanitizer.bypassSecurityTrustHtml('<img src="../../assets/images/LOGO.png" alt="Virtual Learning" style="display: block; margin: 0 auto;">');
        this.errorMessage = null;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error;
      }
    );
  }

  onClickCheckDeviceSupport() {
    var callback = (isSupported : number) => {
      var message;
      if(isSupported <= 0) {
        message = "Sorry, your device is not supported :(";
      } else if(isSupported == 1) {
        message = "Your device is supported! Have fun! :)";
      } else if(isSupported == 2) {
        message = "Your device is partially supported";
      }
      var toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
      });
      toast.present();
    }
    this.vrView.checkIsDeviceSupported(callback);
  }

  onClickOpenUrl(url : string) {
    window.open(url, '_system');
  }
}
