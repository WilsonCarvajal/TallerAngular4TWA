import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes a Utilizar
import {HomeComponent} from './components/home/home.component';
import {ListadoComponent} from './components/listado/listado.component';
import {ErrorComponent} from './components/error/error.component';
import {DetalleComponent} from './components/detalle/detalle.component';
import {FavoritosComponent} from './components/favoritos/favoritos.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
