import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  // i18nselect
  nombre: string = "Javier";
  genero: string = "masculino";
  invitacionM= {
    'femenino':'invitarla',
    'masculino':'invitarlo'
  }

  // i18nplural
  clientes: string[] = ['Maria','Pedro','Juan', 'Marco', 'Manuel'];
  clientesM = {
    '=0': ' no tenemos ningun cliente esperando',
    '=1': ' tenemos un cliente esperando',
    'other': ' tenemos # clientes esperando'
  }

  cambiarNombre():void{
    this.nombre='Isabel';
    this.genero='femenino';
  }

  quitarCliente():void {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona={
    nombre:'Hernando',
    edad: 35,
    direccion: 'Madrid, España'
  }

  //json pipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Batman',
      vuela:false
    },
    {
      nombre:'Robbin',
      vuela:false
    }
  ]

  // Async pipe
  miObsevable = interval(1000); // Emite valores numerivos 0..1 ...2 ...3.. etc

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500);
  });

}
