import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassicRockPage } from '../classic-rock/classic-rock';

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
    console.log("Clicou em Classic Rock");
    this.navCtrl.push(ClassicRockPage);
  }
}
