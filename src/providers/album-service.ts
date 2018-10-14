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

  getAlbumWithSongs() {
    return this.http.get(this.baseURL + 'getWithSongs.php?id=5853');

    //return this.http.get(this.baseURL + 'getWithSongs.php?id=5853', this.httpOptions);

    //return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e85d4943b7835e63751a73a7234ce279');
  }

  getTopAlbums() {
    return this.http.post<Album[]>(this.baseURL + "/index.php", "order=rAverageRating&count=20&page=1", this.httpOptions)
  }

  getAlbums(page: number, bandId: number = null, order: string = "ranking", styleId: number = null) {
    return this.http.post<Album[]>(this.baseURL + "/index.php", { "band": bandId, "order": order, "count": 20, "page": page, "style": styleId});
  }

}
