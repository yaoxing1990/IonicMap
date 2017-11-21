import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  selectedItem: any;
  icons: string[];
  items: Array<{latitude: Number, longitude: Number, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
  }

  ngOnInit() {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/').subscribe(data  => {
      // Read the result field from the JSON response.
      var result = Object.keys(data).map(function(key) {
        return [Number(key), data[key]];
      });
      for(let i = 0; i < result.length; i++) {
        this.items.push({latitude: data[i].latitude, longitude: data[i].longitude, note: "Place " + i, icon: this.icons[Math.floor(Math.random() * this.icons.length)]});
      }
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {latitude: item.latitude, longitude: item.longitude});
  }
}
