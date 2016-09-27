import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PropertyComponent } from './property/property.component';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { GridDataService } from './services/grid-data.service';
import { TemplateViewerComponent } from './template-viewer/template-viewer.component';

import {
  DataTableModule,
  InputTextModule,
  ButtonModule,
  DialogModule,
  ContextMenuModule,
  PanelModule,
  DropdownModule
} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PropertyComponent,
    TemplateEditorComponent,
    TemplateViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    PanelModule,
    DropdownModule
  ],
  providers: [
    appRoutingProviders,
    GridDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
