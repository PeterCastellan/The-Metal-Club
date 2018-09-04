import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFriendsPage } from '../my-friends/my-friends';
import { MyRankPage } from '../my-rank/my-rank';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goToMyRank() {
    this.navCtrl.push(MyRankPage);
  }

  goToMyFriends() {
    this.navCtrl.push(MyFriendsPage);
  }

}
