import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    console.log("arreglo: ", arreglo);
    console.log("text:", texto);
    return arreglo;
  }

}
