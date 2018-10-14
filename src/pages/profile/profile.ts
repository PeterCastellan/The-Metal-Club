import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFriendsPage } from '../my-friends/my-friends';
import { MyRankPage } from '../my-rank/my-rank';
import { Storage } from '@ionic/storage';
import { User } from '../../models/User';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public isUserLogged;

  public user = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('isUserLogged').then(
      val => {
        this.isUserLogged = val;
        console.log(this.isUserLogged)
        if (this.isUserLogged == true) {
          this.storage.get('user').then(
            val => {
              this.user = (val as User);
              console.log(this.user)
            }
          );
        }
      }
    );
    
    /*
    this.storage.get('isUserLogged').then(
      val => {
        this.isUserLogged = val;
        console.log(this.isUserLogged)
      }
    );

    this.storage.get('user').then(
      val => {
        this.user = (val as User);
        console.log(this.user)
      }
    );
    */
  }

  goToMyRank() {
    this.navCtrl.push(MyRankPage);
  }

  goToMyFriends() {
    this.navCtrl.push(MyFriendsPage);
  }

}
