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

    let video3 = new MediaItem()
    video3.inputFormat = InputFormat.FORMAT_DEFAULT
    video3.inputType = InputType.TYPE_MONO
    video3.name = "Revolución de Mayo"
    video3.url = "http://vlearning.com.ar/resources/video/Revoluci%C3%B3n%20de%20Mayo%20de%201810%20en%20Realidad%20Virtual.mp4"
    video3.previewUrl = "https://img.youtube.com/vi/_mLhPMvhvzg/hqdefault.jpg"
    video3.type = MediaType.VIDEO

    items.push(video3)

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
