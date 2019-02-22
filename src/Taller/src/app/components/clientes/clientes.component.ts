import { Component, OnInit, DoCheck } from '@angular/core';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { Cliente } from '../../Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit , DoCheck {

  clientes: Cliente[] = [];
  loading = true;
  public searchText:string = "";
  public limiteInferior = -1;
  public limiteSuperior = 10;

  constructor(private _clienteMongoService : ClientesMongoService) {
    
  }

  ngDoCheck(){
    console.log('Método DoCheck lanzado');
  }

  ngOnInit() {
    this._clienteMongoService.getClientes().subscribe(
    clientes=> {
      this.clientes = clientes;
    },
    error => console.log(error),
    () => {
      this.loading = false;
    });
    
  }
  
  
  deleteCliente(id,i){
    if(confirm("Esta seguro que desea eliminar el cliente : " + this.clientes[i].nombre + " " + this.clientes[i].apellido )){
      console.log("ID : ", id," I : ", i);

    this._clienteMongoService.deleteCliente(id)
    .subscribe((data)=>{
      console.log(data);
      this.clientes.splice(i,1);
    });
    }
    
  
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
