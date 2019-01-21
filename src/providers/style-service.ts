import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Style } from '../models/Style';

@Injectable()
export class StyleServiceProvider {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private baseURL = "https://api.themetalclub.com/api/style";

  constructor(public http: HttpClient) {
    console.log('Hello StyleServiceProvider Provider');
  }

  getStyles() {
    return this.http.get<Style[]>(this.baseURL + "/style/index.php");
  }

  // getList() {
  //   return this.http.get<[Style]>(this.baseURL+"/style/index.php")
  // }

  getStyleById(styleId) {
    return this.http.get<Style>(this.baseURL + "/get.php?id=" + styleId);
  }

  getList() {
    return this.http.get<[Style]>(this.baseURL+"/")
  }

  getStyle(id: number) {
    return this.http.get<Style>(this.baseURL+"/get.php?id="+id, { withCredentials: true })
  }

}
