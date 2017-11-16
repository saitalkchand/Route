/* Angular Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{UserComponent} from './components/user.component';
import {LeftMenuComponent} from '../leftmenu/components/leftmenu.component'

/* Route Configuration */
const OFFER_ROUTES: Routes = [
    {
        path: '',
        component: UserComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(OFFER_ROUTES)],
    exports: [],
    declarations:[UserComponent,LeftMenuComponent]
})

export class UsersModule {
}