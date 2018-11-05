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
import { MemberPage } from '../pages/member/member';
import { HttpClientModule } from '@angular/common/http';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { AlbumPage } from '../pages/album/album';
import { BandPage } from '../pages/band/band';
import { MyRankPage } from '../pages/my-rank/my-rank';
import { AlbumServiceProvider } from '../providers/album-service';
import { BandServiceProvider } from '../providers/band-service';
import { StyleServiceProvider } from '../providers/style-service';
import { StylePage } from '../pages/style/style';
import { MemberServiceProvider } from '../providers/member-service';
import { AuthServiceProvider } from '../providers/auth-service';
import { SongServiceProvider } from '../providers/song-service';
import { CountryServiceProvider } from '../providers/country-service';


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
    MemberPage,
    MyFriendsPage,
    AlbumPage,
    BandPage,
    MyRankPage,
    StylePage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    MemberPage,
    MyFriendsPage,
    AlbumPage,
    BandPage,
    MyRankPage,
    StylePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlbumServiceProvider,
    BandServiceProvider,
    StyleServiceProvider,
    MemberServiceProvider,
    AuthServiceProvider,
    SongServiceProvider,
    CountryServiceProvider
  ]
})
export class AppModule {}
