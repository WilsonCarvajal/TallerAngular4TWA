import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';

import {MatChipsModule} from '@angular/material/chips';
import { HomeComponent } from './components/home/home.component';

import {routing, appRoutingProviders} from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/listado/listado.component';

import {ObjetosService} from './service/objeto.service';
import {GlobalService} from './service/global.service';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    DetalleComponent,
    FavoritosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    routing
  ],

  providers: [appRoutingProviders, GlobalService, ObjetosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
