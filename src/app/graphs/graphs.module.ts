/* Angular Modules */
import {NgModule }from '@angular/core'; 
import {RouterModule, Routes }from '@angular/router'; 

import {GraphComponent}from './components/graph.component'; 
import {ToolTipHistrical }from './components/tooltip/tooltipHistorical.component'; 
import {ToolTipCast }from './components/tooltip/tooltipForecast.component'; 
import {ToolTipDcCompare }from './components/tooltip/tooltipDCcompare.component'; 

import {ChartModule }from 'angular2-highcharts'; 

declare var require:any; 
/* Route Configuration */
const OFFER_ROUTES:Routes = [ {
        path:'', 
        component:GraphComponent

    }
]; 

@NgModule( {
    imports:[RouterModule.forChild(OFFER_ROUTES), ChartModule.forRoot(require('highcharts'))], 
    exports:[], 
    declarations:[
        GraphComponent, 
        ToolTipHistrical, 
        ToolTipCast, 
        ToolTipDcCompare
    ]
})

export class GraphsModule {
}