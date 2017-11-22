/* Angular Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{GraphComponent} from './components/graph.component';


import { ChartsModule } from 'ng2-charts';


/* Route Configuration */
const OFFER_ROUTES: Routes = [
    {
        path: '',
        component: GraphComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(OFFER_ROUTES),ChartsModule],
    exports: [],
    declarations:[GraphComponent]
})

export class GraphsModule {
}