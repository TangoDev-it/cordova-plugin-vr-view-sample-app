import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
    let body = res.json();
    return body || { };
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
