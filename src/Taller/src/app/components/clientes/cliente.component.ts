import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Cliente } from '../../Cliente';
import { ClientesMongoService } from '../../services/clientes-mongo.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  public cliente : Cliente = {
    nombre:"",
    apellido :"",
    direccion: "",
    email :"",
    telefono : "",
    vehiculo :""
  }
  id:string ="";
  nuevo:boolean = false;
  guardado:boolean = false;

  constructor(private router:Router,
              private route:ActivatedRoute ,
              private _clienteMongoService:ClientesMongoService){
                
    this.route.params
    .subscribe( parametros=>{

      this.id = parametros['id']
      if( this.id !== "nuevo" ){
        this._clienteMongoService.getCliente(this.id).subscribe(cliente=> {
          this.cliente = cliente;
          console.log(this.cliente);
        });

      }
      

    });

    

  }

  ngOnInit() {
  }

  guardar(){
    
    
    if( this.id == "nuevo" ){
      // insertando
      
      this.cliente.estadoCliente = true;
      this._clienteMongoService.addCliente(this.cliente)
      .subscribe( (cliente) =>{
        console.log(this.cliente);
        this.guardado = true;
      });
      this.router.navigate(['/clientes']);

      
    }else{
      console.log("Actualizar el cliente : ", this.cliente);
      this._clienteMongoService.updateCliente(this.cliente)
      .subscribe( (resp) =>{
        console.log(resp);
      });
      this.guardado = true;
    }


  }

  agregarNuevo( forma:NgForm ){

    this.router.navigate(['/cliente','nuevo']);

    forma.reset({
    });

  }

  regresar(){
    this.router.navigate(['/clientes']);
  }

}

