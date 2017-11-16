/* Angular Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Application Modules */
import { UsersModule } from '../app/users/users.module';
import { LoginModule } from '../app/login/login.module';

/*Gaurd*/
import {AuthGuard} from '../app/shared/active.guard';

/* Export Functions */
export function loadUsersModule() {
    return UsersModule;
}
export function loadLoginModule() {
    return LoginModule;
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
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: false })
    ],
    exports: [RouterModule],
    providers:[AuthGuard]
})

export class AppRoutingModule {
}
