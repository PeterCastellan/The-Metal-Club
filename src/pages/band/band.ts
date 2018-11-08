import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bandService: BandServiceProvider,
    private albumService: AlbumServiceProvider,
    private songService: SongServiceProvider
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

  /*
  setBand(band) {
    this.band = band;
  }
  */
  /*
  ngOnInit() {
    this.bandService.getBand3(40).subscribe(
      data => {
        let teste = (data as Band)
        this.band = teste
      }
    )
  }
 */

  openAlbum(album) {
    console.log("AQUI: ")
    console.log(album)
    this.navCtrl.push(AlbumPage, album)
  }

  trucateFloatNumber(number: number): string {
    return Number(number).toFixed(2)
  }

  convertSecondsToMinutesAndSeconds(seconds: number) : string {
    var minutes = Math.floor(seconds / 60)
    var seconds = (seconds - minutes * 60)
    
    return (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
  }

}
