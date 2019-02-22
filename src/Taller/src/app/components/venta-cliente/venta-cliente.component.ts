import { MovimientosService } from '../../services/movimientos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { Articulo } from '../../Articulo';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { VentasService } from '../../services/ventas.service';
import { Movimiento } from '../../Movimiento';



@Component({
  selector: 'app-venta-cliente',
  templateUrl: './venta-cliente.component.html',
  styles: ['']
})
export class VentaClienteComponent implements OnInit {
  public limiteInferior = -1;
  public limiteSuperior = 10;
  public deuda:number = 0;
  public aFavor:number = 0;
  public neto:number = 0;
  public ventaTotales:number = 0;
  id:string ="";
  nuevo:boolean = false;
  guardado:boolean = false;
  public ventas:Venta[] = [];
  public movimientos:Movimiento[] = [];
  public movimientos_cliente:Movimiento[] = [];
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
  public ventas_cliente:Venta[] = [];



  constructor(private router:Router,
    private route:ActivatedRoute ,
    private _ventasService:VentasService,
    private _clientesService:ClientesMongoService,
    private _movService:MovimientosService){

      this.route.params
      .subscribe( 
        parametros=> {
          this.id = parametros['id'];
          console.log(this.id);

        this._clientesService.getCliente(this.id).subscribe(
          cliente => this.cliente = cliente,
          err=> console.log("error" + err),
          () => {
            console.log("Cargado cliente");
            this._ventasService.getventas().subscribe(
              ventas => this.ventas = ventas,
              err => console.log("ERROR ",err),
              () => {
                this.ventas_cliente.reverse();
                console.log("COMPLETADA LA CARGA DE VENTAS");
                for (let index = 0; index < this.ventas.length; index++) {
                  if(this.ventas[index].idCliente == this.cliente._id){
                    this.ventas_cliente.push(this.ventas[index]);
                  }
                  
                }
                
                this._movService.getmovimientos().subscribe(
                  movimientos => this.movimientos = movimientos,
                  err => console.log("ERROR", err),
                  () =>{
                    console.log("Completada la carga de movimientos");
                    for (let index = 0; index < this.movimientos.length; index++) {
                      if(this.movimientos[index].idCliente == this.cliente._id){
                        this.movimientos_cliente.push(this.movimientos[index]);
                      }
                      
                    }
                    this.calcularMontos();
                  }
                )

              }
            )
          }
        )


        }
      );



      
   }

  showDatos(esAFavor){
    if(esAFavor){
      return "PAGO"
    }else{
      return "DEUDA"
    }
  }

  orderByFecha(){
    this.ventas_cliente.reverse();
  }


  orderByFechaMov(){
    this.movimientos_cliente.reverse();
  }

  calcularMontos(){
    this.deuda = 0;
    this.neto = 0;
    this.aFavor = 0;
    this.ventaTotales = 0;

    for(let index = 0; index < this.ventas_cliente.length; index ++){
        this.ventaTotales += this.ventas_cliente[index].montoTotal;
    }

   
    for (let index = 0; index < this.movimientos_cliente.length; index++) {
      if (this.movimientos_cliente[index].esAFavor){ 
        this.aFavor += this.movimientos_cliente[index].montoTotal;
      }else{
        this.deuda+=this.movimientos_cliente[index].montoTotal;
      }
    }

 

    this.neto = this.aFavor - this.ventaTotales;

    this.neto = this.neto - this.deuda;

    this.ventaTotales += this.deuda;



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

  goToMovimiento(){
    this.router.navigate(['/nuevoMovimiento']);
  }

  ngOnInit()  {
   

  }

}
