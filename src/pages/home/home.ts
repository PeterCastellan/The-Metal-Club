import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { BandPage } from '../band/band';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
