import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchServiceProvider {

  searchQuery: string
  searchQueryChange = new EventEmitter();

  constructor(public http: HttpClient) {
    console.log('Hello SearchServiceProvider Provider');
  }

}
