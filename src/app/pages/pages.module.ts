import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import {SharedModule} from '../shared/shared.module';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';





@NgModule({

declarations: [
    PagesComponent,
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
],
exports: [
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,

],
imports: [
    SharedModule,
    PAGES_ROUTES
]

})
export class PagesModule {}
