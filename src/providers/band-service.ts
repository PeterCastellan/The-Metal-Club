import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from '../models/Band';

@Injectable()
export class BandServiceProvider {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private baseURL = "https://api.themetalclub.com";

  constructor(public http: HttpClient) {
    console.log('Hello BandServiceProvider Provider');
  }

  getTopBands() {
    return this.http.post<Band[]>(this.baseURL + "/services/BandService.php", "method=getList&order=rAverageRating&count=20&page=1", this.httpOptions);
  }

  getBand2(bandId) {
    return this.http.get<Band>(this.baseURL+"/api/band/getEverything.php?id="+bandId);
  }

  getBand(bandId) {
    return this.http.get(this.baseURL+"/api/band/getEverything.php?id="+bandId, this.httpOptions);
  }

  getBand3(bandId) {
    return this.http.get<Band>("https://api.themetalclub.com/api/band/get.php?id="+bandId);
  }

}
