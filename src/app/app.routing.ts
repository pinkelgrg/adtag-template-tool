import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent }  from './grid';
import { PropertyComponent }    from './property';
import { TemplateEditorComponent }    from './template-editor';

const appRoutes: Routes = [
  { path: '', component: GridComponent },
  { path: 'editor', component: TemplateEditorComponent },
  { path: 'property', component: PropertyComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
