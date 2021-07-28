import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./components/header/header.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavNavigationModule} from "./components/sidenav-navigation/sidenav-navigation.module";
import {CustomSnackbarModule} from "./components/custom-snackbar/custom-snackbar.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterModule, Routes} from "@angular/router";
import {HomeModule} from "./components/home/home.module";
import {HomeComponent} from "./components/home/home.component";
import {DefaultErrorHandler} from "./errorHandlers/default-error-handler";
import {InternalServerErrorHandler} from "./errorHandlers/internal-server-error-handler";
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {MovieViewModule} from "./components/movie-view/movie-view.module";
import {MovieTableModule} from "./components/movie-table/movie-table.module";
registerLocaleData(localeDe);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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
    SidenavNavigationModule,
    CustomSnackbarModule,
    MatSnackBarModule,
    RouterModule,
    HomeModule,
    MovieViewModule,
    MovieTableModule
  ],
  providers: [
    DefaultErrorHandler,
    InternalServerErrorHandler,
    { provide: LOCALE_ID, useValue: 'de-DE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
