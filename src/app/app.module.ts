import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.route.module';
import { AppComponent } from './app.component';

/*LeftMenu*/
import {LeftMenuModule} from '../app/leftmenu/leftmenu.module'
import{LeftMenuComponent} from '../app/leftmenu/components/leftmenu.component'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LeftMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
