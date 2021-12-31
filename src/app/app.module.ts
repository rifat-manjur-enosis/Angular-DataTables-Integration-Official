import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { ZeroConfigurationComponent } from './zero-configuration/zero-configuration.component';
import { WithOptionsComponent } from './with-options/with-options.component';
import { WithAjaxComponent } from './with-ajax/with-ajax.component';
import { AngularWayComponent } from './angular-way/angular-way.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerSideAngularWayComponent } from './server-side-angular-way/server-side-angular-way.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigurationComponent,
    WithOptionsComponent,
    WithAjaxComponent,
    AngularWayComponent,
    ServerSideAngularWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
