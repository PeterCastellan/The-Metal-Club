import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BandServiceProvider } from '../../providers/band-service';
import { Band } from '../../models/Band';
import { Album } from '../../models/Album';
import { AlbumServiceProvider } from '../../providers/album-service';
import { Song } from '../../models/Song';
import { SongServiceProvider } from '../../providers/song-service';
import { AlbumPage } from '../album/album';

@Component({
  selector: 'page-band',
  templateUrl: 'band.html',
})
export class BandPage {

  id: any;
  public band = new Band();
  public albums = new Array<Album>();
  public songs = new Array<Song>();
  public previewText: String;
  isShowingFullText: boolean = false;

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
    console.log('ionViewDidLoad BandPage');
    this.id = this.navParams.get('id');
    console.log(this.id)

    /*
    this.bandService.getBand3(id).subscribe(
      response => {
        let teste = (response as Band)
        this.band =  teste
      }
    )

    */

    this.bandService.getBand2(this.id).subscribe(
      data => {
        //let resposta = (data as any)
        this.band = data
        console.log(data)
        console.log(this.band.sDescricao)
        this.generateReadMorePreviewText();
      },
      error => {
        console.log('Band not found')
      }
    )

    this.albumService.getAlbums(1, this.id).subscribe(
      data => {
        this.albums = data
        console.log(data)
      }
    )

    this.songService.getSongsByBandId(1, this.id).subscribe(
      data => {
        this.songs = data
        console.log("MUSICAAAAAAA")
        console.log(data)
      }
    )


  }

  openAlbum(album) {
    console.log("AQUI: ")
    console.log(album)
    this.navCtrl.push(AlbumPage, album)
  }

  trucateFloatNumber(number: number): string {
    return Number(number).toFixed(2)
  }

  convertSecondsToMinutesAndSeconds(seconds: number): string {
    var minutes = Math.floor(seconds / 60)
    var seconds = (seconds - minutes * 60)

    return (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
  }

  generateReadMorePreviewText() {

    var i = 0
    var textLimit = 500
    let stopAt = textLimit < this.band.sDescricao.length ? textLimit : this.band.sDescricao.length

    var dontStopMeNow = false
    var dontStopMeNowCharCount = 0

    for (var i = 0; (i < stopAt) || dontStopMeNow; i++) {

      var char = this.band.sDescricao.charAt(i)

      switch (char) {
        case "&":
          dontStopMeNow = true
        case ";":
          dontStopMeNow = false
        case "<":
          dontStopMeNow = true
        case ">":
          dontStopMeNow = false
      }

      if (dontStopMeNow) {
        dontStopMeNowCharCount++
        if (dontStopMeNowCharCount == 7) {
          dontStopMeNow = false
          dontStopMeNowCharCount = 0
        }
      }

      this.previewText += char

    }

  }

  readFullText(value) {
    if (value == true) {
      this.isShowingFullText = true;
    } else if (value == false) {
      this.isShowingFullText =  false;
    }
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
