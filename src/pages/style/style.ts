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
  public previewText: String;
  public isShowingFullText: boolean = false;

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
        this.generateReadMorePreviewText();
      }
    )
  }

  openBand(band) {
    this.navCtrl.push(BandPage, band)
  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, album)
  }

  generateReadMorePreviewText() {

    var i = 0
    var textLimit = 500
    let stopAt = textLimit < this.style.sDescricao.length ? textLimit : this.style.sDescricao.length

    var dontStopMeNow = false
    var dontStopMeNowCharCount = 0

    for (var i = 0; (i < stopAt) || dontStopMeNow; i++) {

      var char = this.style.sDescricao.charAt(i)

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
}
