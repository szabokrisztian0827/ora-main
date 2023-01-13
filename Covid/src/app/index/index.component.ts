import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor (private router : Router) {}

  jump(params:string) {

    this.router.navigate([`${params}`])
  }
}
