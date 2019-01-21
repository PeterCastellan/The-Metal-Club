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
  public list_recentAlbums: Album[];
  public list_incompleteRatings =  new Array<Album>();
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
              // this.memberService.getRatedAlbums(this.user.id).subscribe(
              //   data => {
              //     this.list_ratedAlbums = data;
              //     console.log(data)
              //   }
              // )

              // this.albumService.getIncompletedRatingAlbums().subscribe(
              //   data => {
              //     this.list_incompleteRatings = data;
              //   }
              // )

            }
          );
          
          // this.albumService.getIncompletedRatingAlbums().subscribe(
          //   data => {
          //     this.list_incompleteRatings = data;
          //   }
          // );
        }
      }
    );

    // this.bandService.getTopBands().subscribe(
    //   data=> {
    //     this.list_bands = data;
    //   }
    // )

    // this.albumService.getAlbums(1, null, "ranking", null, 50).subscribe(
    //   data=> {
    //     this.list_albums = data;
    //     console.log(this.list_albums)
    //   }
    // )

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

    // this.albumService.getAlbums(1, null, "release", null, 50).subscribe(
    //   data => {
    //     this.list_recentAlbums = data;
    //   }
    // )

    this.albumService.getJustRatedAlbums().subscribe(
      data => {
        if(data.length < 2) {
          this.list_ratedAlbums = data;
        } else {
          this.list_ratedAlbums = [];
        }
      }
    )
      
    // if(this.isUserLogged == true) {
    //   this.albumService.getIncompletedRatingAlbums().subscribe(
    //     data => {
    //       this.list_incompleteRatings = data;
    //     }
    //   )
    // }

  }

  getTopAlbums() {
    this.albumService.getAlbums(1, null, "ranking", null, 50, null, null, true).subscribe(albums => {
      this.list_albums = albums
      var i = 1
      this.list_albums.map(album => { album.serial = i++ })
    })
  }

  getRecentAlbums() {
    this.albumService.getAlbums(1, null, "release", null, 50).subscribe(albums => this.list_recentAlbums = albums)
  }

  getTopBands() {
    this.bandService.getBands(1, 50).subscribe(bands => this.list_bands = bands)
  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, album);
  }

  openStyle(style) {
    this.navCtrl.push(StylePage, style)
  }

  openBand(band) {
    this.navCtrl.push(BandPage, band);
  }


}
