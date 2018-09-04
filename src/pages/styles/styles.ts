import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassicRockPage } from '../classic-rock/classic-rock';
import { ExtremeMetalPage } from '../extreme-metal/extreme-metal';
import { GothicMetalPage } from '../gothic-metal/gothic-metal';

@Component({
  selector: 'page-styles',
  templateUrl: 'styles.html',
})
export class StylesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylesPage');
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
  
}
