import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Movimiento } from '../movimiento' ;

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  domain : string = "http://localhost:3000";
  constructor(private http:HttpClient) {}

  getmovimiento(id){
    return this.http.get<Movimiento>(`${this.domain}/api/movimientos/${id}`)
    .pipe(map(res=>res));
  }

  getmovimientos(){ 
    return this.http.get<Movimiento[]>(`${this.domain}/api/movimientos`)
    .pipe(map(res=>res));
   }  
  
  addmovimiento(newTask:Movimiento){
    return this.http.post<Movimiento>(`${this.domain}/api/movimientos`, newTask)
    .pipe(map(res => res));
  }

  updatemovimiento(newTask) {
    return this.http.put<Movimiento>(`${this.domain}/api/movimientos/${newTask._id}`, newTask)
      .map(res => res);
  }

  deletemovimiento(id){
    console.log("Servicio ", id);
    return this.http.delete(`${this.domain}/api/movimientos/${id}`)
    .pipe(map(res => res));
  }
}
