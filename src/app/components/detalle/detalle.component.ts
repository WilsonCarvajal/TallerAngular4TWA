import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ObjetosService } from '../../service/objeto.service';
import {Objeto} from '../../models/objeto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [ObjetosService]

})
export class DetalleComponent implements OnInit {

  public objeto: Objeto;

  constructor(
    private _objetosService: ObjetosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }


  ngOnInit() {
    console.log('producto-detail.Component.ts cargado...');

    this.getProducto();

  }
  getProducto() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];

      this._objetosService.getObjeto(id).subscribe(
        response => {

          this.objeto = response;
          console.log(this.objeto);
          // this._router.navigate(['/productos']);

        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
