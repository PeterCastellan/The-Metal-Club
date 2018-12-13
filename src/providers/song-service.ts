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

  searchFor(name: string, page: number) {
    return this.http.post<Song[]>(this.baseURL+"/services/SongService.php", "song="+encodeURI(name)+"&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  }

  getListWithBandId(bandId: number, pageNumber: number, shouldIncludeAlbumName: boolean = false) {
    return this.http.post<Song[]>(this.baseURL+"/", {page: pageNumber, band: bandId, shouldIncludeAlbumName: shouldIncludeAlbumName});
  }

  getListWithAlbumId(albumId: string, page: number) {
    return this.http.post<Song[]>(this.baseURL+"/services/SongService.php", "albumId="+albumId+"&shouldIncludeVideoURL=true&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  }

  getListWithStyleId(styleId: number, pageNumber: number) {
    return this.http.get<Song[]>(this.baseURL+"/getWithStyle.php?id="+styleId+"&pageNumber="+pageNumber);
  }

  voteForSong(songId: number, vote: number) {
    return this.http.post<any>(this.baseURL+"/services/SongService.php", "method=vote&song="+songId+"&media="+vote, this.httpOptions);
  }

  deleteRecommendationSong(songId: number) {
    return this.http.post<Song[]>(this.baseURL + "/services/RecommendationService.php", "method=hideSong&recommendation=" + songId, this.httpOptions);
  }

}
