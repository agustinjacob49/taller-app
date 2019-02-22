import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { Articulo } from '../../Articulo';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { VentasService } from '../../services/ventas.service';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styles: []
})
export class VentaComponent implements OnInit {

  id:string ="";
  nuevo:boolean = false;
  guardado:boolean = false;
  public venta : Venta = {
    idCliente:"",
    montoTotal :0,
    articulos: [],
    notas :"",
    fechaActualizacion : "",
    estaPago:false,
    medioPago:""
  }
  public cliente : Cliente = {
    nombre:"",
    apellido :"",
    direccion: "",
    email :"",
    telefono : "",
    vehiculo :""
  }
  loading:boolean = false;

  constructor(private router:Router,
    private route:ActivatedRoute ,
    private _ventasService:VentasService,
    private _clientesService:ClientesMongoService){
      
   
  }

  deleteVenta(){
      console.log("ID : ", this.venta._id);
      this._ventasService.deleteventa(this.venta._id)
      .subscribe((data)=>{
        console.log(data);
      },
    error=> console.log("ERROR", error),
  ()=>{
    console.log("Listo");
    this.router.navigate(['/ventas']);
  });
  }

  ngOnInit() {

    this.route.params
    .subscribe( 
    parametros=> { this.id = parametros['id']
      this._ventasService.getventa(this.id).subscribe(
        venta=> this.venta = venta,
        error=> console.log(error),
        ()=> {
          this._clientesService.getCliente(this.venta.idCliente).subscribe(
            cliente=> this.cliente = cliente ,
            error => console.log(error),
            ()=> {console.log(this.cliente);}
          )
        }
      )
    }
  )

  }

}
