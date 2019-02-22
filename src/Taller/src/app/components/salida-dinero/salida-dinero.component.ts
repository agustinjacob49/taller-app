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
  selector: 'app-salida-dinero',
  templateUrl: './salida-dinero.component.html',
  styles: ['']
})
export class SalidaDineroComponent implements OnInit {
  
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
    salidaDinero:true
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

  }

  regresar(){
    this.router.navigate(['/home']);
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
