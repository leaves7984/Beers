import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, ViewController, ToastController, NavParams } from 'ionic-angular';
import {GiphyServiceProvider} from "../../providers/giphy-service/giphy-service";
import {BeerServiceProvider} from "../../providers/beer-service/beer-service";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the BeerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beer-modal',
  templateUrl: './beer-modal.html',
})
export class BeerModalPage {
  @ViewChild('name') name;
  beer: any = {};
  error: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public beerProvider: BeerServiceProvider,
              public gipyhProvider: GiphyServiceProvider) {

    if (this.navParams.data.id) {
      this.beerProvider.get(this.navParams.get('id')).subscribe((beer: any) => {
        this.beer = beer;
        this.beer.href = beer._links.self.href;
        this.gipyhProvider.get(beer.name).subscribe(url => beer.giphyUrl = url);
      });
    }

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  save(form: NgForm) {
    let update: boolean = form['href'];
    console.log(form['href']);
    this.beerProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Beer "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
    },150);
    console.log('ionViewDidLoad BeerModalPage');
  }

}
