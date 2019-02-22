import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { Articulo } from '../../interfaces/articulo.interface';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasComponent implements OnInit {

  ventas: Venta[] = [];
  clientes:Cliente[] = [];
  loading = true;
  public searchText:string = "";
  public limiteInferior = -1;
  public limiteSuperior = 10;

  constructor(private _ventasService : VentasService,
              private _clientesService: ClientesMongoService) {
    
  }

  ngOnInit() {
    this._ventasService.getventas().subscribe(ventas=> {
      this.ventas = ventas;
      this.ventas.reverse();
    });
    this._clientesService.getClientes().subscribe(clientes=> {
      this.clientes = clientes;
    });
    
    this.loading = false;
  }

  deleteVenta(id, i){
    console.log("ID : ", id, " I : ", i);
    this._ventasService.deleteventa(id)
    .subscribe((data)=>{
      console.log(data);
      this.ventas.splice(i,1);
    });
  }

  showDatos(id){
    for (let index = 0; index < this.ventas.length; index++){
        for (let index2 = 0; index2 < this.clientes.length; index2++) {
          if(this.ventas[index].idCliente == this.clientes[index2]._id)
            return this.clientes[index2].nombre;
        }
      }
  }

  showApellido(id){
    for (let index = 0; index < this.ventas.length; index++){
      for (let index2 = 0; index2 < this.clientes.length; index2++) {
        if(this.ventas[index].idCliente == this.clientes[index2]._id)
          return this.clientes[index2].apellido;
      }
    }
  }

  getCliente(id){
    for(let cl of this.clientes){
      if (cl._id == id){
        return cl.nombre
      }
    }
  }

  getClienteApellido(id){
    for(let cl of this.clientes){
      if (cl._id == id){
        return cl.apellido
      }
    }
  }

  orderBy(){
    this.ventas.reverse();
  }


  showArticulos (arr:Articulo[]){
  
    let arNombres:string[] = [];

    for( let ar of arr){
      arNombres.push(ar.titulo);
    }
    return arNombres;

  }
  
  cambiarPagina(){
    this.limiteSuperior +=10;
    this.limiteInferior +=10;
  }
  retrocederPagina(){
    this.limiteSuperior -=10;
    this.limiteInferior -=10;
  }

  estaEntreLimites(indiceActual){
    if(this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual ){
      return true;
    }else{
      return false;
    }
  }
  

}
