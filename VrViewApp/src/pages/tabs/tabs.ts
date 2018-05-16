import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MediaSamplePage } from '../media-sample/media-sample';
import { TryItPage } from '../try-it/try-it';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = MediaSamplePage;
  tab3Root = TryItPage;

  constructor() {

  }
}
