export enum InputFormat {
  FORMAT_HLS = "FORMAT_HLS",
  FORMAT_DEFAULT = "FORMAT_DEFAULT"
}

export enum InputType {
  TYPE_MONO = "TYPE_MONO",
  TYPE_STEREO_OVER_UNDER = "TYPE_STEREO_OVER_UNDER"
}

export enum MediaType {
  VIDEO = "VIDEO",
  PHOTO = "PHOTO"
}


export class MediaItem {

  inputFormat : InputFormat
  inputType  : InputType
  isLocal : boolean
  name : string
  previewUrl : string
  type : MediaType
  url : string
}
