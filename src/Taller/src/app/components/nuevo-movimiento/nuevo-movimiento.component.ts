import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { VentasService } from '../../services/ventas.service';
import { Movimiento } from '../../Movimiento';
import { MovimientosService } from '../../services/movimientos.service';



@Component({
  selector: 'app-nuevo-movimiento',
  templateUrl: './nuevo-movimiento.component.html',
  styles: ['']
})
export class NuevoMovimientoComponent implements OnInit {
  
  public clientes : Cliente[] = [];
  public ventas : Venta[] = [];
  public guardado: boolean = false;
  public id:string;
  public movimiento : Movimiento = {
    idCliente:"",
    montoTotal:0,
    notas: "",
    medioPago:"",
    esAFavor:false,
    salidaDinero:false
  }
  public cliente:Cliente;

  public ventas_cliente : Venta [] = [];
  
  constructor(private router:Router,
    private route:ActivatedRoute ,
    private _ventasService:VentasService,
    private _clientesService:ClientesMongoService,
    private _movimientosService:MovimientosService) { 

    }

  ngOnInit() {
    
   
      this._clientesService.getClientes().subscribe(clientes=> {
        this.clientes = clientes;
      });
   
    this._ventasService.getventas().subscribe(ventas=> {
      this.ventas = ventas;
    });

  }

  regresar(){
    this.router.navigate(['/home']);
  }

  cargarVentas(){
    console.log("filtrar ventas");
    console.log(this.movimiento.idCliente);
    this.ventas_cliente = [];

    for (let index = 0; index < this.ventas.length; index++) {
        if (this.ventas[index].idCliente == this.movimiento.idCliente ){
            this.ventas_cliente.push(this.ventas[index]);
        }
    }

  }
  
  


  guardar(){
    console.log(this.movimiento);
    
    this._movimientosService.addmovimiento(this.movimiento)
      .subscribe( (movimiento) =>{
        console.log(this.movimiento);
        this.guardado = true;
      });   
  }

}
