import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { Album } from '../models/Album';
import { User } from '../models/User';
import { Medal } from '../models/Medal';

@Injectable()
export class MemberServiceProvider {

  baseURL = "https://api.themetalclub.com/api/member";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {
    console.log('Hello MemberServiceProvider Provider');
  }

  getMembers() {
    return this.http.get<Member[]>(this.baseURL+"/index.php");
  }

  getRatedAlbums(userId) {
    return this.http.get<Album[]>(this.baseURL+"/getRatedAlbums.php?id=" + userId);
  }

  getMemberWithId(memberId: number) {
    return this.http.get<User>(this.baseURL+"/get.php?id="+memberId)
  }

  getUserFriends(userId: number) {
    return this.http.get<any>(this.baseURL+"/listFriends.php?id="+userId)
  }

  getMemberMedals(memberId: number) {
    return this.http.get<Medal[]>(this.baseURL+"/getMedals.php?id="+memberId)
  }

}
