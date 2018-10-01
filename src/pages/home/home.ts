import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BandPage } from '../band/band';
import { AlbumServiceProvider } from '../../providers/album-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public albumService: AlbumServiceProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.albumService.getAlbumWithSongs().subscribe(
      data=>{
        console.log(data)
        const response = (data as any);
        const objeto_retorno = JSON.parse(response);
        console.log(objeto_retorno)
      }, error=>{
        console.log(error)
      }
    )
  }

  teste1() {
    console.log("Card numero 1");
  }

  teste2() {
    console.log("Card numero 2");
  }

  teste3() {
    console.log("Card numero 3");
  }

  teste4() {
    console.log("Card numero 4");
  }

  openAlbum() {
    this.navCtrl.push(AlbumPage);
  }

  openBand() {
    this.navCtrl.push(BandPage);
  }

}
