import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import { BeerServiceProvider} from "../../providers/beer-service/beer-service";
import { GiphyServiceProvider} from "../../providers/giphy-service/giphy-service";
import { BeerModalPage} from "../beer-modal/beer-modal";

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
              public beerProvider: BeerServiceProvider,
              public gipyhProvider: GiphyServiceProvider,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {

    this.beerProvider.getGoodBeers().subscribe(beers => {
      this.beers = beers;
      for (const beer of this.beers) {
        this.gipyhProvider.get(beer.name).subscribe(url => {
          beer.giphyUrl = url
        });
      }
    });
    console.log('ionViewDidLoad BeerPage');
  }

  openModal(beerId) {
    console.log(beerId);
    let modal = this.modalCtrl.create(BeerModalPage, beerId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }


}
