import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../models/Song';


@Injectable()
export class SongServiceProvider {

  baseURL = "https://api.themetalclub.com/api/song";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {
    console.log('Hello SongServiceProvider Provider');
  }

  getSongsByBandId(page:number, bandId: number = null, order: string = "ranking", shouldIncludeAlbumName: boolean = true) {
    return this.http.post<Song[]>(this.baseURL + "/index.php", { "band": bandId, "page": page, "order": order, "count": 20, "shouldIncludeAlbumName": shouldIncludeAlbumName })
  }

}
