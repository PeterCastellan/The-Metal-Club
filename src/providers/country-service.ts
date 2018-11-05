import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/Country';

@Injectable()
export class CountryServiceProvider {

  baseURL = "https://api.themetalclub.com/api/country";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {
    console.log('Hello CountryServiceProvider Provider');
  }

  getList() {
    return this.http.get<Country[]>(this.baseURL+"/index.php");
  }

}
