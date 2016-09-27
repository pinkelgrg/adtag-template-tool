import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
cities: SelectItem[];
selectedCity: string;
  constructor() {
    this.cities = [];
   }

  ngOnInit() {
  }

}
