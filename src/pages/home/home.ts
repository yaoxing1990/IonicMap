import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  title: string = 'Ionic Map';
  lat: number = this.navParams.get("latitude");
  lng: number = this.navParams.get("longitude");

}
