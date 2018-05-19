import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { ApiProvider } from '../../providers/api/api';
import { VrViewProvider } from '../../providers/vr-view/vr-view';

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
    public api: ApiProvider,
    public toastCtrl: ToastController,
    public vrView: VrViewProvider
  ) {}

  ionViewDidLoad() {
    this.loadMediaSamples();
    this.verificarCompatibilidad()
  }

  loadMediaSamples() {
    this.isLoading = true;
    this.api.getMediaSamples()
      .subscribe(
        mediaSamples => {
          this.isLoading = false;
          this.mediaSamples = mediaSamples;
          this.errorMessage = null;
        },
        error => {
          this.isLoading = false;
          this.errorMessage = error;
        }
      );
  }

  onMediaSampleitemClick(mediaSampleElement) {
    this.vrView.playMediaSample(mediaSampleElement);
  }

  verificarCompatibilidad() {
    this.vrView.checkIsDeviceSupported((compatible: number) => {
      if(compatible == 0) {
        this.mostrarMensaje("Lamentablemente tu dispositivo no es compatible. \nEs muy probable que no puedas reproducir los videos.")
      }
      else if(compatible == 1) {
        this.mostrarMensaje("Tu dispositivo no es del todo compatible. \nPodrás ver videos pero podrían producirse errores.")
      }
    });
  }

  mostrarMensaje(mensaje: string) {
    var toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
    });
    toast.present();
  }

}
