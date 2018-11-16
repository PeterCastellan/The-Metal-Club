import { Component, Input } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Song } from '../../models/Song';
import { Album } from '../../models/Album';
import { Band } from '../../models/Band';
import { BandServiceProvider } from '../../providers/band-service';
import { AlbumServiceProvider } from '../../providers/album-service';
import { SongServiceProvider } from '../../providers/song-service';
import { BandPage } from '../band/band';
import { AlbumPage } from '../album/album';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  @Input searchQuery: any;
  searchResult: boolean = false;
  public list_bands: Band[];
  public list_albums: Album[];
  public list_songs: Song[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private bandService: BandServiceProvider,
    private albumService: AlbumServiceProvider,
    private songService: SongServiceProvider,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  /*
  onInput() {
    if (this.searchQuery != "") {
      
      this.bandService.searchFor(this.searchQuery, 1).subscribe(
        data => {
          this.list_bands = data;
          console.log("BANDAS")
          console.log(this.list_bands)
        }
        )
        
        this.albumService.searchFor(this.searchQuery, 1).subscribe(
        data=> {
          this.list_albums = data;
          console.log("ALBUMS")
          console.log(this.list_albums)
        }
        )
        
        this.songService.searchFor(this.searchQuery, 1).subscribe(
          data => {
            this.list_songs = data;
            console.log("SONGS")
            console.log(this.list_songs)
          }
        )
          
          this.searchResult =  true
      } else {
        this.searchResult = false
      }
    console.log(this.searchQuery)
  }
*/
  openBand(band) {
    this.navCtrl.push(BandPage, band);
  }

  trucateFloatNumber(number: number): string {
    return Number(number).toFixed(2)
  }

  showToast(musica:string, nota: string) {
    let toast = this.toastCtrl.create({
      message: "You have voted " + nota + " to " + musica,
      duration: 2000,
      position: "top"
    });

    toast.present(toast);
  }

  voteForSong(id, nota, musica) {
    this.songService.voteForSong(id, nota).subscribe(
      data => {
        this.showToast(musica, nota);
      }
    )
  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, album);
  }

  ngOnChanges(){
    this.bandService.searchFor(this.searchQuery, 1).subscribe(data => this.list_bands = data)
    this.albumService.searchFor(this.searchQuery, 1).subscribe(data => this.list_albums = data)
    this.songService.searchFor(this.searchQuery, 1).subscribe(data => this.list_songs = data)
  }

}
