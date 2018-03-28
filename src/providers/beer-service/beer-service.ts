import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the BeerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerServiceProvider {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/beers';


  constructor(public http: HttpClient) {
    console.log('Hello BeerServiceProvider Provider');
  }

  getGoodBeers(): Observable<any> {
    return this.http.get(this.API + '/good-beers');
  }
  get(id: string) {
    return this.http.get(this.BEER_API + '/' + id);
  }

  save(beer: any): Observable<any> {
    let result: Observable<Object>;
    if (beer['href']) {
      result = this.http.put(beer.href, beer);
    } else {
      result = this.http.post(this.BEER_API, beer)
    }

    return result.catch(error => Observable.throw(error));
  }

  remove(id: string) {
    return this.http.delete(this.BEER_API + '/' + id);
  }
}
