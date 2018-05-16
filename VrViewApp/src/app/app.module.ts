import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MediaSamplePage } from '../pages/media-sample/media-sample';
import { TryItPage } from '../pages/try-it/try-it';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileChooser } from '@ionic-native/file-chooser';

import { ComponentsModule } from '../components/components.module';
import { ApiProvider } from '../providers/api/api';
import { VrViewProvider } from '../providers/vr-view/vr-view';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MediaSamplePage,
    TryItPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MediaSamplePage,
    TryItPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    VrViewProvider
  ]
})
export class AppModule {}
