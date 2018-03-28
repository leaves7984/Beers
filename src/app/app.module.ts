import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BeerPage} from "../pages/beer/beer";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeerServiceProvider } from '../providers/beer-service/beer-service';
import { HttpClientModule} from "@angular/common/http";
import { GiphyServiceProvider } from '../providers/giphy-service/giphy-service';
import { BeerModalPage} from "../pages/beer-modal/beer-modal";

@NgModule({
  declarations: [
    BeerModalPage,
    BeerPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BeerModalPage,
    BeerPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeerServiceProvider,
    GiphyServiceProvider
  ]
})
export class AppModule {}
