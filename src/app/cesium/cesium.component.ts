import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {

  cesiumViewer: any;

  constructor(public element: ElementRef) {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngOnInit() {
    this.cesiumViewer = new Cesium.Viewer(this.element.nativeElement.getElementsByClassName('cesium-container')[0]);
  }

}
