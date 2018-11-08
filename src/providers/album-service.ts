import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  getAlbums(page: number, bandId: number = null, order: string = "ranking", styleId: number = null) {
    return this.http.post<Album[]>(this.baseURL + "/index.php", { "band": bandId, "order": order, "count": 20, "page": page, "style": styleId});
  }

  searchFor(name: string, page: number) {
    return this.http.post<Album[]>(this.baseURL+"/services/AlbumService.php", "album_name="+name+"&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  }

  getIncompletedRatingAlbums() {
    return this.http.get<Album[]>(this.baseURL+"/completeWhatYouStarted.php", { withCredentials: true })
  }


}
