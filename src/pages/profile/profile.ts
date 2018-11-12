import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFriendsPage } from '../my-friends/my-friends';
import { MyRankPage } from '../my-rank/my-rank';
import { Storage } from '@ionic/storage';
import { User } from '../../models/User';
import { MemberServiceProvider } from '../../providers/member-service';
import { Country } from '../../models/Country';
import { CountryServiceProvider } from '../../providers/country-service';
import { Medal } from '../../models/Medal';
import { Album } from '../../models/Album';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public member = new User();

  public isUserLogged;

  public countries = new Array<Country>();
  public medals = new Array<Medal>();
  public medalsCount: any[] = []
  public list_ratedAlbums = new Array<Album>();

  public user = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private memberService: MemberServiceProvider,
    private countryService: CountryServiceProvider
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
            val=> {
              this.member = (val as User);
              console.log("MEMBER ID: " +this.member.id)

              this.memberService.getMemberWithId(this.member.id).subscribe(
                data => {
                  this.user = data;
                  console.log(this.user)
                }
              )

              this.memberService.getMemberMedals(this.member.id).subscribe(
                data => {
                  this.setMedals(data);
                }
              )

              this.countryService.getList().subscribe(countries => this.countries = countries)

              this.memberService.getRatedAlbums(this.member.id).subscribe(
                data => {
                  this.list_ratedAlbums = data;
                }
              )
              
              //this.memberService.getUserFriends(this.memberId).subscribe(result => this.loadFriends(result))

            }
          );
        }
      }
    );
    
  }

  goToMyRank(user) {
    this.navCtrl.push(MyRankPage, user);
  }

  goToMyFriends(user) {
    this.navCtrl.push(MyFriendsPage, user);
  }

  getMemberAge(member: User) {
    var yearOfBirth = +member.dtBirthday.split("-")[0];
    let today = new Date();
    return today.getFullYear() - +yearOfBirth;
  }

  getCountry(countryId: number): string {
    if (this.countries) {
      var countries = this.countries.filter(country => +country.id == countryId)
      return countries[0].sPais
    } else {
      return null;
    }
  }

  setMedals(medals) {
    this.medals = medals;

    var counting = {}
    
    medals.forEach(element => {
      counting[element.sTipo] = (counting[element.sTipo] || 0) + 1
    })

    var objetos = this.objectEntries(counting)
        objetos.forEach(element => {
          this.medalsCount.push({"name": element[0], "number": element[1] })
        });
  }

  objectEntries(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  }

}
