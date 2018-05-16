import { Component, Input } from '@angular/core';
import { MediaSampleModel } from '../../models/media-sample.model';

@Component({
  selector: 'media-sample-item',
  templateUrl: 'media-sample-item.html'
})
export class MediaSampleItemComponent {

  @Input() mediaSample: MediaSampleModel;

  constructor() {}

}
