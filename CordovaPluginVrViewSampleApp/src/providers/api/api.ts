import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  private apiUrl = 'https://cordovavrview.tangodev.it/api.php';

  constructor(public http: Http) {}

  getMediaSamples() {
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw("Sì è verificato un errore di connessione.");
  }
}
