import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: string;

  opciones = [
    {name: 'none', color: '' },
    {name: 'Primary', color: 'primary' },
    {name: 'Accent', color: 'accent' },
    {name: 'Warn', color: 'warn' }
    ];

  ngOnInit() {
    console.log('El Componente se ha Iniciado' + this.opciones);
  }

}
