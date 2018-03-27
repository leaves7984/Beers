import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";

/*
  Generated class for the BeerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerServiceProvider {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/good-beers';

  constructor(public http: HttpClient) {
    console.log('Hello BeerServiceProvider Provider');
  }

  getGoodBeers(): Observable<any> {
    return this.http.get(this.BEER_API);
  }

}
