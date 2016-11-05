import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultComponent }  from './default/default.component';
import { CesiumComponent }    from './cesium/cesium.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cesium', component: CesiumComponent },
      { path: '', component: DefaultComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
