import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Album } from '../../models/Album';
import { AlbumServiceProvider } from '../../providers/album-service';
import { Song } from '../../models/Song';
import { DomSanitizer } from '@angular/platform-browser';
import { SongServiceProvider } from '../../providers/song-service';

@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  id: any;
  public album = new Album();
  public list_songs: Song[] = new Array<Song>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private albumService: AlbumServiceProvider,
    private songService: SongServiceProvider,
    private sanitizer: DomSanitizer,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
    this.id = this.navParams.get('id');
    console.log(this.id)

    this.albumService.getAlbumWithSongs(this.id).subscribe(
      data => {
        this.album = data;
        this.list_songs = this.album.songs
        console.log(this.album)
        console.log(this.list_songs)
      },
      error => {
        console.log("Album not found")
      }
    )

  }

  testando() {
    console.log("FUNCIONOU!!!");
  }

  getAlbumSize() {
    if (this.album.songs) {

      let duration = this.album.songs.map(song => +song.rDuracao).reduce((a, b) => a + b, 0);

      var minutes = Math.floor(duration / 60);
      var seconds = duration - minutes * 60;

      return seconds < 10 ? `${minutes}m0${seconds}s` : `${minutes}m${seconds}s`

    } else {
      return "0m"
    }

  }

  trucateFloatNumber(number: number): string {
    return Number(number).toFixed(2)
  }

  getSize(value) {

    var minutes = Math.floor(value/60);
    var seconds = value - minutes * 60;

    return seconds < 10 ? `${minutes}m0${seconds}s` : `${minutes}m${seconds}s`
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


}
