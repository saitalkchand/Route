/* Angular Modules */
import {NgModule }from '@angular/core'; 
import {RouterModule, Routes }from '@angular/router'; 

import {FormsModule, ReactiveFormsModule}from '@angular/forms'; 

import {UserComponent}from './components/user.component'; 


/* Route Configuration */
const OFFER_ROUTES:Routes = [ {
        path:'', 
        component:UserComponent

    }
]; 

@NgModule( {
    imports:[
        RouterModule.forChild(OFFER_ROUTES),
        FormsModule, 
        ReactiveFormsModule
    ], 
    exports:[], 
    declarations:[UserComponent]
})

export class UsersModule {
}