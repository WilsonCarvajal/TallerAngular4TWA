import { Component, OnInit } from '@angular/core';
import {ObjetosService} from '../../service/objeto.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public let; favoritos = [];

  // public let objetos: Objeto[];
  // public let favoritos: Objeto[];

  constructor(private objetoService: ObjetosService) { }

  ngOnInit() {
    this.favoritos = this.objetoService.getFavoritos();
    console.log(this.favoritos);
  }

  borrarFavorito(objeto) {
    this.objetoService.borrarFavorito(objeto);
  }

}
