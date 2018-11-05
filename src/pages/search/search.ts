import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/Song';
import { Album } from '../../models/Album';
import { Band } from '../../models/Band';
import { BandServiceProvider } from '../../providers/band-service';
import { AlbumServiceProvider } from '../../providers/album-service';
import { SongServiceProvider } from '../../providers/song-service';
import { BandPage } from '../band/band';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: any;
  searchResult: boolean = false;
  public list_bands: Band[];
  public list_albums: Album[];
  public list_songs: Song[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private bandService: BandServiceProvider,
    private albumService: AlbumServiceProvider,
    private songService: SongServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput() {
    if (this.searchQuery != "") {
      this.searchResult =  true

      this.bandService.searchFor(this.searchQuery, 1).subscribe(
        data => {
          this.list_bands = data;
          console.log(this.list_bands)
        }
      )

      this.albumService.searchFor(this.searchQuery, 1).subscribe(
        data=> {
          this.list_albums = data;
          console.log(this.list_albums)
        }
      )

      this.songService.searchFor(this.searchQuery, 1).subscribe(
        data => {
          this.list_songs = data;
          console.log(this.list_songs)
        }
      )

    } else {
      this.searchResult = false
    }
    console.log(this.searchQuery)
  }

  openBand(band) {
    console.log("ISSO É O QUE TA SENDO PASSADO: " + band)
    this.navCtrl.push(BandPage, band);
  }

}
