import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from '../models/Band';

@Injectable()
export class BandServiceProvider {

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  // };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    withCredentials: true
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

  // getBand(bandId) {
  //   return this.http.get(this.baseURL+"/api/band/getEverything.php?id="+bandId, this.httpOptions);
  // }

  getBand3(bandId) {
    return this.http.get<Band>("https://api.themetalclub.com/api/band/get.php?id="+bandId);
  }

  searchFor(name: string, page: number, numberOfItems: number = 20) {
    return this.http.post<Band[]>(this.baseURL + "/services/BandService.php", "name="+encodeURI(name)+"&method=getList&order=rAverageRating&count="+numberOfItems+"&page="+page, this.httpOptions);
  }

  getBandsBy(page: number, order: string , styleId: number , numberOfItems: number = 50, countryId: number) {
    return this.http.post<Band[]>(this.baseURL+"/services/BandService.php", "style="+styleId+"&country="+countryId+"&method=getList&order=rAverageRating&count="+numberOfItems+"&page="+page, this.httpOptions);
  }

  getBands(page: number, numberOfItems: number = 50, order: string = "ranking", styleId: number = null, countryId: number = null, memberId: number = null) {
    return this.http.post<Band[]>(this.baseURL + "/api/band/index.php", "style="+styleId+"&country="+countryId+"&method=getList&order="+order+"&count="+numberOfItems+"&page="+page+"&member="+memberId, this.httpOptions);
  }

  getBand(bandId: number) {
    return this.http.get<Band>(this.baseURL+"/api/band/getEverything.php?id="+bandId, this.httpOptions);
  }

}
