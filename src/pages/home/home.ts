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
  latitud: any;
  longitud: any;

  constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation) {
    
  }

  
  ionViewDidLoad() {
  
   
    this.platform.ready().then(() => {

      // get current position
     this.geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.latitud=pos.coords.latitude;
        this.longitud=pos.coords.longitude;
        this.showMap();
      });

      const watch = this.geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    }); 
    //

  }
  showMap(){
    console.log(this.latitud + "latitud impresa");
    const location=new google.maps.LatLng(this.latitud,this.longitud);
    const options = {
      center: location,
      zoom: 20,
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
