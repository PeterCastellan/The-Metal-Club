import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberPage } from '../member/member';
import { MyFriendsPage } from '../my-friends/my-friends';

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

  goToMember() {
    this.navCtrl.push(MemberPage);
  }

  goToMyFriends() {
    this.navCtrl.push(MyFriendsPage);
  }

}
