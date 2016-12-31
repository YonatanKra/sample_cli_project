import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';
import "cesium/Build/Cesium/Cesium.js"

/**
 * This is my cesium comment
 */
@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {
  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;
  cesiumViewer: any;

  constructor(public element: ElementRef, private renderer: Renderer) {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngAfterViewInit() {
    this.cesiumViewer = new Cesium.Viewer(this.cesiumContainer.nativeElement);
  }

  ngOnInit() {

  }

}
