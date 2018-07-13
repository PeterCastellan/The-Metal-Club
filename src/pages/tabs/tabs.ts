import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { StylesPage } from '../styles/styles';
import { SearchPage } from '../search/search';
import { ForYouPage } from '../for-you/for-you';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StylesPage;
  tab3Root = SearchPage;
  tab4Root = ForYouPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
