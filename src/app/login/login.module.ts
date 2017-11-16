/* Angular Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {LoginComponent} from '../login/components/login.component'

/* Route Configuration */
const OFFER_ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(OFFER_ROUTES),CommonModule],
    exports: [],
    declarations:[LoginComponent]
})

export class LoginModule {
}