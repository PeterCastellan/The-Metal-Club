import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Album } from '../models/Album';

@Injectable()
export class AlbumServiceProvider {

  baseURL = "https://api.themetalclub.com/api/album";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {
    console.log('Hello AlbumServiceProvider Provider');
  }

  getAlbumWithSongs(id) {
    return this.http.get<Album>(this.baseURL +"/getWithSongs.php?id="+id);
  }

  getTopAlbums() {
    return this.http.post<Album[]>(this.baseURL + "/index.php", "order=rAverageRating&count=20&page=1", this.httpOptions)
  }

  getAlbums(page: number, bandId: number = null, order: string = "ranking", styleId: number = null, numberOfItems: number = 20) {
    return this.http.post<Album[]>(this.baseURL, { "band": bandId, "order": order, "count": numberOfItems, "page": page, "style": styleId}, { withCredentials: true });
  }

  searchFor(name: string, page: number) {
    return this.http.post<Album[]>(this.baseURL+"/services/AlbumService.php", "album_name="+name+"&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  }

  getIncompletedRatingAlbums() {
    return this.http.get<Album[]>(this.baseURL+"/completeWhatYouStarted.php", { withCredentials: true })
  }

  getJustRatedAlbums() {
    return this.http.get<Album[]>(this.baseURL + "/justRated.php")
  }

  // getFilteredAlbums(page: number, filterList: Filter, numberOfItems: number = 50) {
  //   return this.http.post<Album[]>(this.baseURL, "method=getList&order=rAverageRating&count=" + numberOfItems + this.stringifyFilters(filterList), httpOptions);
  // }

  // private stringifyFilters(selectedFilters: Filter):String {
  //   let filterString = '';
  //   for (let i in selectedFilters.selectedCountries)
  //     filterString=filterString+'&country='+i;
  //   for (let i in selectedFilters.selectedOrder)
  //     filterString=filterString+'&order='+i;
  //   for (let i in selectedFilters.selectedStyles)
  //     filterString=filterString+'&style='+i;

  //   return filterString;
  // }


}
