import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassicRockPage } from '../classic-rock/classic-rock';
import { ExtremeMetalPage } from '../extreme-metal/extreme-metal';
import { GothicMetalPage } from '../gothic-metal/gothic-metal';
import { StyleServiceProvider } from '../../providers/style-service';
import { Style } from '../../models/Style';

@Component({
  selector: 'page-styles',
  templateUrl: 'styles.html',
})
export class StylesPage {

  list_styles: Style[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private styleService: StyleServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylesPage');

    this.styleService.getStyles().subscribe(
      data=>{
        this.list_styles = data;
      }
    )
  }

  openClassicRock() {
    this.navCtrl.push(ClassicRockPage);
  }

  openExtremeMetal() {
    this.navCtrl.push(ExtremeMetalPage);
  }

  openGothicMetal() {
    this.navCtrl.push(GothicMetalPage);
  }

  openStyle(style) {
    console.log(style);
    console.log(style.sNome)
  }
  
}
