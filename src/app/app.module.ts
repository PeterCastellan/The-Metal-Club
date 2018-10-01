import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StylesPage } from '../pages/styles/styles';
import { SearchPage } from '../pages/search/search';
import { ForYouPage } from '../pages/for-you/for-you';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ClassicRockPage } from '../pages/classic-rock/classic-rock';
import { MemberPage } from '../pages/member/member';
import { ExtremeMetalPage } from '../pages/extreme-metal/extreme-metal';
import { GothicMetalPage } from '../pages/gothic-metal/gothic-metal';
import { HttpClientModule } from '@angular/common/http';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { AlbumPage } from '../pages/album/album';
import { BandPage } from '../pages/band/band';
import { MyRankPage } from '../pages/my-rank/my-rank';
import { AlbumServiceProvider } from '../providers/album-service';
//import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ForYouPage,
    HomePage,
    ProfilePage,
    SearchPage,
    StylesPage,
    TabsPage,
    LoginPage,
    ClassicRockPage,
    MemberPage,
    ExtremeMetalPage,
    GothicMetalPage,
    MyFriendsPage,
    AlbumPage,
    BandPage,
    MyRankPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
    //HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForYouPage,
    HomePage,
    ProfilePage,
    SearchPage,
    StylesPage,
    TabsPage, 
    LoginPage, 
    ClassicRockPage,
    MemberPage,
    ExtremeMetalPage,
    GothicMetalPage,
    MyFriendsPage,
    AlbumPage,
    BandPage,
    MyRankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlbumServiceProvider,
    AlbumServiceProvider
  ]
})
export class AppModule {}
