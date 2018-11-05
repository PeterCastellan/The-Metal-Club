import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StyleServiceProvider } from '../../providers/style-service';
import { Style } from '../../models/Style';
import { StylePage } from '../style/style';

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

  openStyle(style) {
    this.navCtrl.push(StylePage, style)
  }
  
}
