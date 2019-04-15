import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Style } from '../models/Style';
import { User } from '../models/User';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthServiceProvider {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private baseURL = "https://api.themetalclub.com/api/auth";

  public user: User;

  private userChangeEvt = new Subject<User>();
  public userEmitter = this.userChangeEvt.asObservable();

  constructor(
    public http: HttpClient,
    public storage: Storage
    ) {
    
  }

  login(credential) {
    return this.http.post(this.baseURL + "/index.php", credential, { withCredentials: true })
  }

  getAuthenticatedUserData() {
    return this.http.get(this.baseURL + '/loggedUser.php', { withCredentials: true });
  }

  logout() {
    this.storage.remove('isUserLogged');
    this.storage.remove('user');
    return this.http.get(this.baseURL + "/logout.php", { withCredentials: true })
  }

  facebookLogin(key: string) {
    return this.http.post(this.baseURL + "/facebookLogin.php", { key: key })
  }

  forgotPassword(email: string) {
    return this.http.post(this.baseURL + '/forgotPassword.php', { email: email }, { withCredentials: true });
  }

  register(name: string, email: string, sConfirmEmail: string, sPassword: string, sConfirmPassword: string, styles: number[], facebookId: number = null) {
    let attributes = {
      sName: name,
      sEmail: email,
      sConfirmEmail: sConfirmEmail,
      sPassword: sPassword,
      sConfirmPassword: sConfirmPassword,
      idADMEstilo: styles,
      idFacebook: facebookId
    }
    return this.http.post(this.baseURL + '/register.php', attributes, { withCredentials: true });
  }

  getMyStyles() {
    return this.http.get<[Style]>(this.baseURL + '/getMyStyles.php', { withCredentials: true })
  }

  updateUser(user: User) {
    return this.http.post(this.baseURL + '/updateProfile.php', user, { withCredentials: true })
  }

  changeUserPhoto(photo: File) {
    const formData: FormData = new FormData();
    formData.append('sAvatar', photo, photo.name);
    return this.http.post<any>(this.baseURL + '/updateAvatar.php', formData, { withCredentials: true })
  }

  userEmitChange(usr: User) {
    this.userChangeEvt.next(usr);
  }

}
