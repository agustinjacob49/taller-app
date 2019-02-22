import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Venta } from '../venta' ;

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  domain : string = "http://localhost:3000";
  constructor(private http:HttpClient) {}

  getventa(id){
    return this.http.get<Venta>(`${this.domain}/api/ventas/${id}`)
    .pipe(map(res=>res));
  }

  getventas(){ 
    return this.http.get<Venta[]>(`${this.domain}/api/ventas`)
    .pipe(map(res=>res));
   }
   
  
  addventa(newTask:Venta){
    return this.http.post<Venta>(`${this.domain}/api/ventas`, newTask)
    .pipe(map(res => res));
  }

  updateventa(newTask) {
    return this.http.put<Venta>(`${this.domain}/api/ventas/${newTask._id}`, newTask)
      .map(res => res);
  }

  deleteventa(id){
    console.log("Servicio ", id);
    return this.http.delete(`${this.domain}/api/ventas/${id}`)
    .pipe(map(res => res));
  }
}
