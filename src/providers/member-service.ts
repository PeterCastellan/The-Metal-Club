import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { Album } from '../models/Album';
import { User } from '../models/User';
import { Medal } from '../models/Medal';
import { Band } from '../models/Band';

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

  getMemberWithId(memberId: number) {
    return this.http.get<User>(this.baseURL+"/get.php?id="+memberId, { withCredentials: true })
  }

  //getUserFriends(userId: number) {
    //return this.http.get<any>(this.baseURL+"/listFriends.php?id="+userId)
  //}

  getMemberMedals(memberId: number) {
    return this.http.get<Medal[]>(this.baseURL+"/getMedals.php?id="+memberId)
  }

  getRatedAlbums(memberId: number, order: string){
    return this.http.get<[Album]>(this.baseURL+"/getRatedAlbums.php?id="+memberId+"&order="+order+"&count=50", { withCredentials: true })
  }

  //getRatedAlbums(memberId: number, order: string){
  //  return this.http.get<[Album]>(this.baseURL+"/getRatedAlbums.php?id="+memberId+"&order="+order, { withCredentials: true })
  //}

  // getMyRecommendations() {
  //   return this.http.get<any>(this.baseURL+"/getMyRecommendations.php", { withCredentials: true })
  // }

  getMyRecommendations(pageNumber: number, style: number = null) {
    return this.http.get(this.baseURL+"/getMyRecommendations.php?style="+style+"&page_number="+pageNumber, { withCredentials: true })
  }

  getUserFriends(userId: number) {
    return this.http.get(this.baseURL+"/listFriends.php?id="+userId, { withCredentials: true })
  }

  getMemberRankingWithStyle(styleId: number, pageNumber: number) {
  //getMemberRankingWithStyle(styleId: number, pageNumber: number, filterList: Filter = new Filter()) {
  //   console.log("index.php?id="+styleId+"&page="+pageNumber+this.stringifyFilters(filterList))
     return this.http.get<User[]>(this.baseURL+"index.php?id="+styleId+"&page="+pageNumber);
   }

   addAsFriend(memberId: number) {
    return this.http.get(this.baseURL+"/addAsFriend.php?id="+memberId);
  }

  getRatedBands(memberId: number, order: string){
    return this.http.get<[Band]>(this.baseURL+"/getRatedBands.php?id="+memberId+"&order="+order+"&count=50", { withCredentials: true })
  }
  
  searchFor(name: string, page: number) {
    return this.http.post<User[]>(this.baseURL + '/services/MemberService.php', "name="+encodeURI(name)+"&method=getList&order=rAverageRating&count=50&page="+page, this.httpOptions);
  }

}
