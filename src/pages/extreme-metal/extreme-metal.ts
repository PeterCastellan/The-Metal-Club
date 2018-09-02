import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-extreme-metal',
  templateUrl: 'extreme-metal.html',
})
export class ExtremeMetalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtremeMetalPage');
  }

}
