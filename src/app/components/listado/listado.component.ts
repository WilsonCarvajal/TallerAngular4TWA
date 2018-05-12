import { Component, OnInit } from '@angular/core';
import {ObjetosService } from '../../service/objeto.service';
import { Objeto } from '../../models/objeto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ObjetosService]
})
export class ListadoComponent implements OnInit {

  public let objetos = [];
  public let favoritos = [];

  // public let objetos: Objeto[];
  // public let favoritos: Objeto[];

  constructor(private objetoService: ObjetosService) { }

   /**El iniciar el componente se realiza la carga se llama al servicio para realizar la consulta */
  ngOnInit() {
    console.log('Listado');
    this.objetoService.getObjetos().subscribe(
      resultado => {
        this.objetos = resultado;
        console.log(this.objetos);
      }
    );
  }

  /** Recibe un objeto y lo entrega al servicio para guardarlo en localStorage**/
  agregarFavorito( objeto: Objeto) {
    this.objetoService.guardarFavorito(objeto);
  }

}
