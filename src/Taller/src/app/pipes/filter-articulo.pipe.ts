import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../Articulo';


@Pipe({
  name: 'filterArticulo'
})
export class FilterArticuloPipe implements PipeTransform {

  transform(items: Articulo[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.titulo.toLowerCase().includes(searchText);
    });
   }

}
