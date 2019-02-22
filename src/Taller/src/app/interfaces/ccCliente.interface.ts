export interface ccCliente {
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    telefono: string;
    vehiculo?: string;
    fechaActualizacion:string;
    key$?:string;
    keyCliente:string;
}
