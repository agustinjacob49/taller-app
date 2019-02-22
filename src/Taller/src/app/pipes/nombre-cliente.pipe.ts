import { Pipe, PipeTransform } from '@angular/core';
import { ClientesMongoService } from '../services/clientes-mongo.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'nombreCliente'
})
export class NombreClientePipe implements PipeTransform {
  transform(idCliente:string): any {
    let  _clientesService:ClientesMongoService;
    _clientesService.getCliente(idCliente).subscribe(result =>{
        return result.nombre;
    });
  }

}
