import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidoCliente'
})
export class ApellidoClientePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
