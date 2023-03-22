import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

class BaseClass {
  unaPropiedad: string;
  otraPropiedad: string;

  public unMetodo() {
    return 'metodo base';
  }
}

class Extended1Class extends BaseClass {
  unaPropiedadExtendida1: string;
  otraPropiedadExtendida1: string;
  public unMetodoExtendido1() {
    return 'metodo extendido 1';
  }
}

class Extended2Class extends BaseClass {
  unaPropiedadExtendida2: string;
  otraPropiedadExtendida2: string;
  public unMetodoExtendido2() {
    return 'metodo extendido 2';
  }
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <button (click)="probarLista()" >Probar lista</button>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  miListaGenerica: Array<BaseClass> = [
    new Extended1Class(),
    new Extended2Class(),
  ];

  public probarLista() {

    this.miListaGenerica.forEach((x) => {

      if (x instanceof Extended1Class) {
        console.log('soy tipoExtendido1');
        console.log(
          (<Extended1Class>x).unMetodoExtendido1()
        );
      } else if (x instanceof Extended2Class) {
        console.log('soy tipo extendido 2');
        console.log(
          (<Extended2Class>x).unMetodoExtendido2()
        );
      }

    });
    console.log();
  }
}

bootstrapApplication(App);
