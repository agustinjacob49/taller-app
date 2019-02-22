import { Articulo } from './Articulo';

export class Venta{
    _id?:string;
    idCliente:string;
    montoTotal:number;
    articulos: Articulo[];
    conceptoServicio?: string;
    notas: string;
    estaPago:boolean;
    medioPago:"";
    fechaActualizacion?:string;
    n?:number;
}