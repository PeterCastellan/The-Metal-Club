import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { User } from '../../models/User';
import { Band } from '../../models/Band';
import { Auth } from '../../models/Auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credential: Object = {
    username: '',
    password: ''
  }

  public auth =  new Auth()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private authService: AuthServiceProvider 
  ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.set('isUserLogged', false);
  }

  login() {
    this.authService.login(this.credential).subscribe(
      data => {
        this.auth = (data as Auth);
        if (this.auth.success == true) {
          this.storage.set('isUserLogged', true)
          this.storage.set('user', this.auth.user)
          this.navCtrl.push(TabsPage, this.auth)
        } 
        else {
          alert("Username or password incorrect");
        } 
      },
      error => {
        console.log("Erro de requisição")
        console.log(error)
      }
    )
  }

  continue() {
    this.storage.set('isUserLogged', false)
    this.navCtrl.push(TabsPage);
  }

}
