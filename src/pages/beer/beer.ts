import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeerServiceProvider} from "../../providers/beer-service/beer-service";
import { GiphyServiceProvider} from "../../providers/giphy-service/giphy-service";

/**
 * Generated class for the BeerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {
  private beers: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public provider: BeerServiceProvider,
              public gipyhProvider: GiphyServiceProvider) {
  }

  ionViewDidLoad() {

    this.provider.getGoodBeers().subscribe(beers => {
      this.beers = beers;
      for (const beer of this.beers) {
        this.gipyhProvider.get(beer.name).subscribe(url => {
          beer.giphyUrl = url
        });
      }
    });
    console.log('ionViewDidLoad BeerPage');
  }

}
