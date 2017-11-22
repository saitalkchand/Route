/* Angular Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Application Modules */
import { UsersModule } from '../app/users/users.module';
import { LoginModule } from '../app/login/login.module';
import { GraphsModule } from '../app/graphs/graphs.module';

/*Gaurd*/
import {AuthGuard} from '../app/shared/active.guard';

/*LeftMenu*/
import {LeftMenuComponent} from './leftmenu/components/leftmenu.component'

/* Export Functions */
export function loadUsersModule() {
    return UsersModule;
}
export function loadLoginModule() {
    return LoginModule;
}
export function loadGraphModule() {
    return GraphsModule;
}


/* Main Application Routes */
const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login'
    },
    {
        path: 'login',
        pathMatch: 'prefix',
        loadChildren: loadLoginModule
    },
    {
        path: 'user',
        pathMatch: 'prefix',
        canActivate: [AuthGuard],
        loadChildren: loadUsersModule
    },
    {
        path: 'graph',
        pathMatch: 'prefix',
        canActivate: [AuthGuard],
        loadChildren: loadGraphModule
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: false })
    ],
    exports: [RouterModule],
    providers:[AuthGuard],
    declarations:[]
})

export class AppRoutingModule {
}
