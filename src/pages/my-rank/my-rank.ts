import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { MemberServiceProvider } from '../../providers/member-service';

@Component({
  selector: 'page-my-rank',
  templateUrl: 'my-rank.html',
})
export class MyRankPage {

  public memberId

  public user = new User();

  public rankings: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private memberService: MemberServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRankPage');
    this.memberId = this.navParams.get('id');

    this.memberService.getMemberWithId(this.memberId).subscribe(
      data => {
        this.user = data;

        var objetos = this.objectEntries(this.user.styleRanking)
        objetos.forEach(element => {
          this.rankings.push({ "name": element[0], "position": element[1] })
        });
        console.log(this.rankings)

      }
    )
  }

  objectEntries(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };

}
