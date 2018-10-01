import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/Album';



@Injectable()
export class AlbumServiceProvider {

  baseURL = "https://api.themetalclub.com/api/album/";
  /*
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
*/

/*
  httpOptions = {
    headers: new HttpHeaders({ 'Referer': 'https://lab.themetalclub.com' })
  };
*/

  constructor(public http: HttpClient) {
    console.log('Hello AlbumServiceProvider Provider');
  }

  getAlbumWithSongs() {
    return this.http.get(this.baseURL + 'getWithSongs.php?id=5853');

    //return this.http.get(this.baseURL + 'getWithSongs.php?id=5853', this.httpOptions);

    //return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e85d4943b7835e63751a73a7234ce279');
  }

}
