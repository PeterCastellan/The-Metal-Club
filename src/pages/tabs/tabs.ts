import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { StylesPage } from '../styles/styles';
import { SearchPage } from '../search/search';
import { ForYouPage } from '../for-you/for-you';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  isUserLogged: boolean;

  tab1Root = HomePage;
  tab2Root = StylesPage;
  tab3Root = SearchPage;
  tab4Root = ForYouPage;
  tab5Root = ProfilePage;

  constructor(
    public storage: Storage
  ) {

  }

  ionViewDidLoad() {
    this.storage.get('isUserLogged').then(
      val => {
        this.isUserLogged = val;
      }
    )
  }
}
