import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Album } from '../models/Album';

@Injectable()
export class AlbumServiceProvider {

  baseURL = "https://api.themetalclub.com/api/album";

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  // };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    withCredentials: true
  };

  constructor(public http: HttpClient) {
    console.log('Hello AlbumServiceProvider Provider');
  }

  getAlbumWithSongs(id) {
    return this.http.get<Album>(this.baseURL +"/getWithSongs.php?id="+id);
  }

  getAlbum(bandId: string) {
    return this.http.post<Album>(this.baseURL+'/getWithSongs.php?id='+bandId, {}, { withCredentials: true });
  }

  getTopAlbums() {
    return this.http.post<Album[]>(this.baseURL + "/index.php", "order=rAverageRating&count=20&page=1", this.httpOptions)
  }

  getAlbums(page: number, bandId: number = null, order: string = "ranking", styleId: number = null, numberOfItems: number = 50, countryId: number = null, memberId: number = null, filterOnlyRanked: boolean = false, startYear: string = null, endYear: string = null) {
    return this.http.post<Album[]>(this.baseURL + "/index.php", { "band": bandId, "order": order, "count": numberOfItems, "page": page, "style": styleId, "country": countryId, "user.id": memberId, filterOnlyRanked: filterOnlyRanked, anoInicio: startYear, anoFim: endYear }, { withCredentials: true });
  }

  getAlbumsBy(page: number, bandId: number , order: string , styleId: number = null, numberOfItems: number = 50, memberId: number = null) {
    return this.http.post<Album[]>(this.baseURL + "/index.php", { "band": bandId, "order": order, "count": numberOfItems, "page": page, "style": styleId, "member": memberId}, { withCredentials: true });
  }

  searchFor(name: string, page: number) {
    return this.http.post<Album[]>(this.baseURL+"/services/AlbumService.php", "album_name="+encodeURI(name)+"&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  }

  // searchFor(name: string, page: number) {
  //   return this.http.post<Album[]>(this.baseURL+"/services/AlbumService.php", "album_name="+name+"&method=getList&order=rAverageRating&count=20&page="+page, this.httpOptions);
  // }

  getIncompletedRatingAlbums() {
    return this.http.get<Album[]>(this.baseURL+"/completeWhatYouStarted.php", { withCredentials: true })
  }

  getJustRatedAlbums() {
    return this.http.get<Album[]>(this.baseURL + "/justRated.php", { withCredentials: true })
  }

}
