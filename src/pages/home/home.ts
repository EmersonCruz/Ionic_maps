import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private platform: Platform/*, private geolocation: Geolocation*/) {
    /*platform.ready().then(() => {

      // get current position
     geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });*/

  }

  
  ionViewDidLoad() {
  
    this.showMap();
  }
  showMap(){
    const location=new google.maps.LatLng(51.507351,-0.127758);
    const options = {
      center: location,
      zoom: 10,
      mapTypeId: 'roadmap',
    }
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,this.map);
  }
  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }   
}
