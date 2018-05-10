import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {MediaItem, InputFormat, InputType, MediaType} from "./media-item";

@Injectable()
export class ApiProvider {
  private mediaSamplesApiUrl = 'https://cordovavrview.tangodev.it/media-samples-api.php';
  private infoTextApiUrl = 'https://cordovavrview.tangodev.it/info-text-api.php';

  constructor(public http: Http) {}

  getMediaSamples() {
    return this.http.get(this.mediaSamplesApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  getInfoText() {
    return this.http.get(this.infoTextApiUrl)
      .map(this.extractTextData)
      .catch(this.handleErrors);
  }

  private extractJsonData(res: Response) {

    console.log(res.json(), "res")
    let items: MediaItem[] = []

    let video1 = new MediaItem()
    video1.inputFormat = InputFormat.FORMAT_DEFAULT
    video1.inputType = InputType.TYPE_STEREO_OVER_UNDER
    video1.name = "Revolución de Mayo"
    video1.url = "http://vlearning.com.ar/resources/video/Revoluci%C3%B3n%20de%20Mayo%20de%201810%20en%20Realidad%20Virtual.mp4"
    video1.previewUrl = "https://img.youtube.com/vi/_mLhPMvhvzg/hqdefault.jpg"
    video1.type = MediaType.VIDEO

    let video2 = new MediaItem()
    video2.inputFormat = InputFormat.FORMAT_DEFAULT
    video2.inputType = InputType.TYPE_STEREO_OVER_UNDER
    video2.name = "Discover Machu Picchu in 360"
    video2.url = "https://r5---sn-p5qlsnd6.googlevideo.com/videoplayback?expire=1525928015&fexp=23724337&ratebypass=yes&ei=73vzWpi_Kpis8wSNraTwDA&fvip=5&dur=135.070&ipbits=0&source=youtube&signature=81983653D5F04508E8E71C13179EFD1FAC1A8231.D4F568A262CF84A935669014D5ECBC5C78ECE251&initcwndbps=6352500&itag=22&mn=sn-p5qlsnd6%2Csn-vgqsrn7d&c=WEB&mm=31%2C26&pl=14&id=o-ALdt7_agzzJwXD-R4_x4fVvmia3T9Fo6o4j2Lx5IXafv&mv=m&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mt=1525906302&key=yt6&mime=video%2Fmp4&requiressl=yes&ip=54.81.217.76&lmt=1480611416613140&ms=au%2Conr"
    video2.previewUrl = "https://img.youtube.com/vi/Ltau98Z2p04/hqdefault.jpg"
    video2.type = MediaType.VIDEO

    items.push(video1)
    items.push(video2)

    return items
  }

  private extractTextData(res: Response) {
    let body = res.text();
    return body || "";
  }

  private handleErrors(error: Response) {
    console.log("Error API");
    return Observable.throw("There was an error while loading data.");
  }
}
