import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberPage } from '../member/member';
import { MemberServiceProvider } from '../../providers/member-service';
import { User } from '../../models/User';
import { CountryServiceProvider } from '../../providers/country-service';
import { Country } from '../../models/Country';

@Component({
  selector: 'page-my-friends',
  templateUrl: 'my-friends.html',
})
export class MyFriendsPage {

  public id;
  //public friends = new Array<User>();
  public friends;
  public countries = new Array<Country>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private memberService: MemberServiceProvider,
    private countryService: CountryServiceProvider
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

    this.countryService.getList().subscribe(countries => this.countries = countries)
  }

  goToMember(member) {
    this.navCtrl.push(MemberPage, member);
  }

  getCountry(countryId: number): string {
    if (this.countries) {
      var countries = this.countries.filter(country => +country.id == countryId)
      return countries[0].sPais
    } else {
      return null;
    }
  }


}
