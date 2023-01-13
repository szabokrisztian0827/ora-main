import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {KulkerComponent} from "./kulker/kulker.component";
import{GazdasagComponent} from "./gazdasag/gazdasag.component";


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'kulker', component:KulkerComponent},
  {path: 'gazdasag',component:GazdasagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
