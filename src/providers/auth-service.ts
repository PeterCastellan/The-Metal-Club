import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthServiceProvider {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private baseURL = "https://api.themetalclub.com/api/auth";

  constructor(
    public http: HttpClient,
    public storage: Storage
    ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credential) {
    //return this.http.post(this.baseURL + "/index.php", credential, this.httpOptions)
    return this.http.post(this.baseURL + "/index.php", credential, { withCredentials: true })
  }

  getAuthenticatedUserData() {
    return this.http.get(this.baseURL + '/loggedUser.php', { withCredentials: true });
  }

  logout2() {
    this.storage.remove('isUserLogged');
    this.storage.remove('user');
  }

  logout() {
    return this.http.get(this.baseURL + "/logout.php", { withCredentials: true })
  }

}
