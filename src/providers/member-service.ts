import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { Album } from '../models/Album';

@Injectable()
export class MemberServiceProvider {

  baseURL = "https://api.themetalclub.com/api";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {
    console.log('Hello MemberServiceProvider Provider');
  }

  getMembers() {
    return this.http.get<Member[]>(this.baseURL+"/member/index.php");
  }

  getRatedAlbums(userId) {
    return this.http.get<Album[]>(this.baseURL+"/member/getRatedAlbums.php?id=" + userId);
  }

}
