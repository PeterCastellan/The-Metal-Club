import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Style } from '../models/Style';

@Injectable()
export class StyleServiceProvider {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private baseURL = "https://api.themetalclub.com/api";

  constructor(public http: HttpClient) {
    console.log('Hello StyleServiceProvider Provider');
  }

  getStyles() {
    return this.http.get<Style[]>(this.baseURL + "/style/index.php");
  }

  getStyleById(styleId) {
    return this.http.get<Style>(this.baseURL + "/style/get.php?id=" + styleId);
  }

}
