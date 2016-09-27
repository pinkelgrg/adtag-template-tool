import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GridData } from '../grid/grid-data';
import {TemplateParser} from '../utils/template-parser';
@Component({
  selector: 'app-template-viewer',
  templateUrl: './template-viewer.component.html',
  styleUrls: ['./template-viewer.component.css']
})
export class TemplateViewerComponent implements OnInit {
  @Input() selectedTemplate: GridData;
  selectedTemplateHTML = '';
  templateParser = new TemplateParser();

  @ViewChild('iframe') iframe: ElementRef;
  title: string = 'adTag Template';
  iframeHeight: string = '100%';
  iframeWidth: string = '100%';

  constructor() { }

  ngOnChanges(changed) {
    if (typeof changed.selectedTemplate.currentValue !== 'undefined') {
      this.updateIframeWithSelectedTemplate(changed.selectedTemplate.currentValue);
    }
  }
  ngOnInit() {

  }
  updateIframeWithSelectedTemplate(templ: GridData) {

    let content = this.templateParser.beginTemplateValidation(templ);

    if (content === null) {

    } else {
      let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
      doc.open();
      doc.write(content);
      doc.close();
    }
    if (typeof templ !== 'undefined' && templ !== null) {
      this.iframeHeight = templ.HEIGHT || '100%';
      this.iframeWidth = templ.WIDTH || '100%';
      if ( typeof templ.HEIGHT !== 'undefined' && templ.HEIGHT !== null && templ.HEIGHT.toLowerCase() === 'h') {
        this.iframeHeight = this.getActualUnitHeightByElement();
      }

      if (typeof templ.WIDTH !== 'undefined' && templ.WIDTH !== null && templ.WIDTH.toLowerCase() === 'w') {
        this.iframeWidth = '100%';
      }
    }
  }
  getActualUnitHeightByElement () {
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow.document;
    let body = doc.body || doc.documentElement;

    if (navigator.appName === 'Microsoft Internet Explorer') {
      return doc.body['scrollHeight'];
    } else {
      return body['offsetHeight'];
    }
  }
}
