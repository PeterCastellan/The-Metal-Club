import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credential: Object = {
    username: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //public auth: AuthProvider 
  ) {
  }

  /*
  login() {
    console.log(this.credential);
    this.auth.login(this.credential).subscribe(
      data=>{
        console.log(data);
        this.navCtrl.push(TabsPage);
    }, error=>{
        console.log(error);
    }
  )
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
