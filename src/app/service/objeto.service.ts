import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../service/global.service';
import { Objeto } from './../models/objeto';

@Injectable()
export class ObjetosService {
  public url: string;
  public favoritos: Objeto[];

  constructor(
    public _http: HttpClient,
    private _url: GlobalService,
  ) {
    this.favoritos = [];
    this.url = _url.getUrl();
  }

  /** Metodo que obtiene los objetos desde protocolo http y la url de la api*/
  getObjetos() {
     console.log(this.url);
     console.log(this.url);
     return this._http.get(this.url + '/photos');
  }

  /** Metodo que obtiene solo un objeto desde el protocolo http y la url de la api
  * recibe la id del objeto a buscar*/
  getObjeto(id) {
    console.log(id);
    return this._http.get(this.url + '/photos/' + id);
  }

  /** Metodo que obtiene los favoritos desde el LocalStorage del navegador
  * devuelve los favoritos del local storage*/
  getFavoritos() {
    if (localStorage.getItem('favoritos') == null) {
      this.favoritos = [];
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
    }

    return this.favoritos;
  }

  /** Guarda un objeto de la lista y lo guarda en LocalStorage como favorito*/
  guardarFavorito(favorito: Objeto) {
    this.favoritos.unshift(favorito);
    let favoritos  = [];
    if (localStorage.getItem('favoritos') == null) {
      favoritos = [];
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
      favoritos = JSON.parse(localStorage.getItem('favoritos'));
      favoritos.unshift(favorito);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  }

  /** Borra un objeto de favoritos*/
  borrarFavorito(favorito: Objeto) {
    for (let i = 0; this.favoritos.length; i++) {
      if (favorito == this.favoritos[i]) {
          this.favoritos.splice(i, 1 ) ;
          localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
          return this.favoritos;
      }
    }
  }

}
