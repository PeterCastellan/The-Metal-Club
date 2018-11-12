import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberServiceProvider } from '../../providers/member-service';
import { User } from '../../models/User';
import { Country } from '../../models/Country';
import { Medal } from '../../models/Medal';
import { Album } from '../../models/Album';
import { CountryServiceProvider } from '../../providers/country-service';

@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {

  public id;

  public user = new User();

  public countries = new Array<Country>();
  public medals = new Array<Medal>();
  public medalsCount: any[] = []
  public list_ratedAlbums = new Array<Album>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private memberService: MemberServiceProvider,
    private countryService: CountryServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
    this.id = this.navParams.get('id');

    this.memberService.getMemberWithId(this.id).subscribe(
      data => {
        this.user = data;

        this.memberService.getMemberMedals(this.user.id).subscribe(
          data => {
            this.setMedals(data);
          }
        )

        this.memberService.getRatedAlbums(this.user.id).subscribe(
          data => {
            this.list_ratedAlbums = data;
          }
        )

      }
    )

    this.countryService.getList().subscribe(countries => this.countries = countries)

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
  };

}
