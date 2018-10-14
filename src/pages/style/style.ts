import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StyleServiceProvider } from '../../providers/style-service';
import { Style } from '../../models/Style';
import { BandPage } from '../band/band';
import { AlbumPage } from '../album/album';

@Component({
  selector: 'page-style',
  templateUrl: 'style.html',
})
export class StylePage {

  id: any;
  style = new Style();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private styleService: StyleServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylePage');
    this.id = this.navParams.get('id');

    this.styleService.getStyleById(this.id).subscribe(
      data => {
        this.style = data;
        console.log(this.style)
      }
    )
  }

  openBand(band) {
    this.navCtrl.push(BandPage, band)
  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, album)
  }

}
