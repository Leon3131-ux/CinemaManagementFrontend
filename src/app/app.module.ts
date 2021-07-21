import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./components/header/header.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavNavigationModule} from "./components/sidenav-navigation/sidenav-navigation.module";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    SidenavNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
