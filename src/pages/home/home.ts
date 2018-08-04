import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: Element;
  constructor(public navCtrl: NavController) {

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
