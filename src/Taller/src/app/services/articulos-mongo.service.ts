import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Articulo } from '../Articulo' ;

@Injectable({
  providedIn: 'root'
})
export class ArticulosMongoService {

  domain : string = "http://localhost:3000";
  constructor(private http:HttpClient) {}


  getarticulo(id){
    return this.http.get<Articulo>(`${this.domain}/api/articulos/${id}`)
    .pipe(map(res=>res));
  }

  getarticulos(){ 
    return this.http.get<Articulo[]>(`${this.domain}/api/articulos`)
    .pipe(map(res=>res));
   }  
  
  addarticulo(newTask:Articulo){
    return this.http.post<Articulo>(`${this.domain}/api/articulos`, newTask)
    .pipe(map(res => res));
  }

  updatearticulo(newTask) {
    return this.http.put<Articulo>(`${this.domain}/api/articulos/${newTask._id}`, newTask)
      .map(res => res);
  }

  deletearticulo(id){
    console.log("Servicio ", id);
    return this.http.delete(`${this.domain}/api/articulos/${id}`)
    .pipe(map(res => res));
  }
}
