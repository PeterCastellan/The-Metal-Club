import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BandPage } from '../band/band';
import { AlbumServiceProvider } from '../../providers/album-service';
import 'rxjs/add/operator/map';
import { Band } from '../../models/Band';
import { BandServiceProvider } from '../../providers/band-service';
import { Album } from '../../models/Album';
import { StyleServiceProvider } from '../../providers/style-service';
import { Style } from '../../models/Style';
import { MemberServiceProvider } from '../../providers/member-service';
import { Member } from '../../models/Member';
import { Storage } from '@ionic/storage';
import { User } from '../../models/User';
import { StylePage } from '../style/style';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public list_bands: Band[];
  public list_albums: Album[];
  public list_styles: Style[];
  public list_members: Member[];
  public list_ratedAlbums: Album[];
  public isUserLogged;
  public user = new User();

  constructor(
    public navCtrl: NavController,
    private albumService: AlbumServiceProvider,
    private bandService: BandServiceProvider,
    private styleService: StyleServiceProvider,
    private memberService: MemberServiceProvider,
    public storage: Storage
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.storage.get('isUserLogged').then(
      val => {
        this.isUserLogged = val;
        console.log(this.isUserLogged)
        if (this.isUserLogged == true) {
          this.storage.get('user').then(
            val => {
              this.user = (val as User);
              console.log(this.user)
              this.memberService.getRatedAlbums(this.user.id).subscribe(
                data => {
                  this.list_ratedAlbums = data;
                  console.log("Ta aqui ó")
                  console.log(data)
                }
              )
            }
          ); 
        }
      }
    );

    this.bandService.getTopBands().subscribe(
      data=> {
        this.list_bands = data;
      }
    )

    this.albumService.getTopAlbums().subscribe(
      data=> {
        this.list_albums = data;
        console.log(this.list_albums)
      }
    )

    this.styleService.getStyles().subscribe(
      data=> {
        this.list_styles = data;
      }
    )

    this.memberService.getMembers().subscribe(
      data=> {
        this.list_members = data;
      }
    )

  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, album);
  }

  openStyle(style) {
    this.navCtrl.push(StylePage, style)
  }

  openBand(band) {
    console.log("ISSO É O QUE TA SENDO PASSADO: " + band)
    this.navCtrl.push(BandPage, band);
  }

}
