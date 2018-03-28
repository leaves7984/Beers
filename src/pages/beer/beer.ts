import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams,ToastController } from 'ionic-angular';
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
              public modalCtrl: ModalController,
              public toastCtrl: ToastController) {
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
  remove(beer){
    this.beerProvider.remove(beer.id).subscribe(response => {
      for (let i = 0; i < this.beers.length; i++) {
        if (this.beers[i] === beer) {
          this.beers.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Beer "' + beer.name + '" deleted.',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }
    });

  }


}
