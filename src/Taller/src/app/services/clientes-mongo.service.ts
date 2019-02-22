import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Cliente } from '../Cliente' ;

@Injectable({
  providedIn: 'root'
})
export class ClientesMongoService {

  domain : string = "http://localhost:3000";
  constructor(private http:HttpClient) {}

  getCliente(id){
    return this.http.get<Cliente>(`${this.domain}/api/clientes/${id}`)
    .pipe(map(res=>res));
  }

  getClientes(){ 
    return this.http.get<Cliente[]>(`${this.domain}/api/clientes`)
    .pipe(map(res=>res));
   }  
  
  addCliente(newTask:Cliente){
    return this.http.post<Cliente>(`${this.domain}/api/clientes`, newTask)
    .pipe(map(res => res));
  }

  updateCliente(newTask) {
    return this.http.put<Cliente>(`${this.domain}/api/clientes/${newTask._id}`, newTask)
      .map(res => res);
  }

  deleteCliente(id){
    console.log("Servicio ", id);
    return this.http.delete(`${this.domain}/api/clientes/${id}`)
    .pipe(map(res => res));
  }
}
