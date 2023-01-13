import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GazdasagComponent } from './gazdasag/gazdasag.component';
import { KulkerComponent } from './kulker/kulker.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GazdasagComponent,
    KulkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
