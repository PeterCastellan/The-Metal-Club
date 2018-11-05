import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberPage } from '../member/member';
import { MemberServiceProvider } from '../../providers/member-service';
import { User } from '../../models/User';

@Component({
  selector: 'page-my-friends',
  templateUrl: 'my-friends.html',
})
export class MyFriendsPage {

  public id;
  public friends = new Array<User>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private memberService: MemberServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFriendsPage');
    this.id = this.navParams.get('id');

    this.memberService.getUserFriends(this.id).subscribe(
      data => {
        this.friends = data;
      }
    )
  }

  goToMember(member) {
    this.navCtrl.push(MemberPage, member);
  }


}
