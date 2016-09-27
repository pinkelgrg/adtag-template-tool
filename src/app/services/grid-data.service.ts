import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridData } from '../grid/grid-data';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GridDataService {
  selectedTemplate: GridData;

  constructor(private http: Http) {}

  getGridsData() {
    return this.http.get('app/services/mock-grid_data.json')
    .toPromise()
    .then(res => <GridData[]> res.json())
    .then(data => { return data; });
  }

  setSelectedTemplate(templ: GridData) {

    this.selectedTemplate = templ;

  }

  getSelectedTemplate() {

    return this.selectedTemplate;

  }
}
