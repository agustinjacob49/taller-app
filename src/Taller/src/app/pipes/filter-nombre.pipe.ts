import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../Cliente';

@Pipe({
  name: 'filterNombre'
})
export class FilterNombrePipe implements PipeTransform {

  transform(items: Cliente[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.apellido.toLowerCase().includes(searchText);
    });
   }

}
