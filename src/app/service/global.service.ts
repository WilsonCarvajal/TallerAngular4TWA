import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable()
export class GlobalService implements OnInit {


  constructor() { }
  private url =  'https://jsonplaceholder.typicode.com';

  ngOnInit() {
    console.log(this.url);
  }

  getUrl() {
    return this.url;
  }
}
