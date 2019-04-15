import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FloatingPlayerServiceProvider {

  videoChange: EventEmitter<number> = new EventEmitter();

  constructor(public http: HttpClient) {
    console.log('Hello FloatingPlayerServiceProvider Provider');
  }

}
