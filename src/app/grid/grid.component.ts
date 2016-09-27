import { Component, OnInit } from '@angular/core';
import { GridData } from './grid-data';
import { GridDataService } from './../services/grid-data.service';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  template: GridData = new AdTagTemplates('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  selectedTemplate: GridData;
  templates: GridData[];

  private contextMenuItems: MenuItem[];

  constructor(private gridDataService: GridDataService) { }

  ngOnInit() {

    this.gridDataService.getGridsData()
    .then(records => this.templates = records);

    this.contextMenuItems = [
      {
        label: 'Edit',
        icon: 'fa-search',
        command: (event) => console.log(this.selectedTemplate)
      },
      {
        label: 'Clone',
        icon: 'fa-edit',
        command: (event) => this.cloneSelectedRow(this.selectedTemplate)
      }
    ];
  }
  editSelectedRow(templ: GridData) {
    // open a modal to edit the selected template.
    console.log(templ);

  }

  cloneSelectedRow(templ: GridData) {
    // open property page and populate the current template's data.
    console.log(templ);

  }

  onRowSelect (event) {

    this.selectedTemplate = event.data;
  }

}

class AdTagTemplates implements GridData {

    constructor(public TEMPLATE_ID: any, public TEMPLATE_HTML_ID: any, public NAME: any, public TAG_ID: any, public NUMBER_OF_ADS: any,
    public WIDTH: any, public HEIGHT: any, public USES_THUMBNAILS: any, public IMAGE_SIZE: any, public HTML_TEXT: any,
    public SVN_REL_PATH: any, public PLATFORM: any, public AUTO_FIT: any, public AUTO_FIT_DELAY: any, public LONG_ADCOPY: any,
    public TEMPLATE_ENGINE_ID: any) {}
}
