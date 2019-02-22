import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../../services/movimientos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { Articulo } from '../../Articulo';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { VentasService } from '../../services/ventas.service';
import { Movimiento } from '../../Movimiento';



@Component({
  selector: 'app-ver-totales',
  templateUrl: './ver-totales.component.html',
  styles: []
})
export class VerTotalesComponent implements OnInit {
  public movimientos:Movimiento[] = [];
  public loading:boolean = true;
  public deuda:number = 0;
  public aFavor:number = 0;
  public neto:number = 0;
  public totalVendido:number= 0;
  public ventas:Venta[]=[];
  public movimientos_entrada:Movimiento[] = [];
  public movimientos_salida:Movimiento[] = [];
  public limiteInferior = -1;
  public limiteSuperior = 10;
  public limiteInferior2 = -1;
  public limiteSuperior2 = 10;
  constructor(private _movService:MovimientosService,
  private _ventasService:VentasService) {
    
    this._movService.getmovimientos().subscribe(
      result => this.movimientos = result,
      err => console.log("ERROR", err),
      ()=>{
        console.log("Finalizo la carga");
        this.loading = false;
        for (let index = 0; index < this.movimientos.length; index++) {
           if(this.movimientos[index].esAFavor){
             this.movimientos_entrada.push(this.movimientos[index]);
           }
          
        }
        for (let index = 0; index < this.movimientos.length; index++) {
          if(this.movimientos[index].salidaDinero){
            this.movimientos_salida.push(this.movimientos[index]);
          }
         
       }

       this._ventasService.getventas().subscribe(
         ventas=> this.ventas = ventas,
         err => console.log("ERROR", err),
         ()=>{ 
           console.log("LISTO");
           this.calcularMontos();
         }
        )
     

      }
    )

   }

  ngOnInit() {
  }

  showDatos(esAFavor){
    if(esAFavor){
      return "PAGO"
    }else{
      return "DEUDA"
    }
  }
  
  deleteMovimiento_entrada(_id, i){
    if(confirm("Esta seguro que desea eliminar el movimiento : " + _id )){
      this._movService.deletemovimiento(_id)
      .subscribe(
    (data)=>{
      console.log(data);
      this.movimientos_entrada.splice(i,1);
    },
    error=> console.log(error),
    ()=> {
      console.log("ELIMINADO");
      this.calcularMontos();
    });
    }
  }
  deleteMovimiento_salida(_id, i){
    if(confirm("Esta seguro que desea eliminar el movimiento : " + _id )){
      this._movService.deletemovimiento(_id)
      .subscribe(
    (data)=>{
      console.log(data);
      this.movimientos_salida.splice(i,1);
    },
    error=> console.log(error),
    ()=> {
      console.log("ELIMINADO");
      this.calcularMontos();
    });
    }
  }

  
  calcularMontos(){
    this.deuda = 0;
    this.neto = 0;
    this.aFavor = 0;

    for (let index = 0; index < this.movimientos_entrada.length; index++) {
      this.aFavor += this.movimientos_entrada[index].montoTotal;
    }
    
    for (let index = 0; index < this.movimientos_salida.length; index++) {
      this.deuda += this.movimientos_salida[index].montoTotal;
    }

    for (let index = 0; index < this.ventas.length; index++) {
      this.totalVendido += this.ventas[index].montoTotal;
    }


    this.neto = this.aFavor - this.deuda;
  

  }

  cambiarPagina(){
    this.limiteSuperior +=10;
    this.limiteInferior +=10;
  }
  retrocederPagina(){
    this.limiteSuperior -=10;
    this.limiteInferior -=10;
  }
  cambiarPagina2(){
    this.limiteSuperior2 +=10;
    this.limiteInferior2 +=10;
  }
  retrocederPagina2(){
    this.limiteSuperior2 -=10;
    this.limiteInferior2 -=10;
  }


  estaEntreLimites(indiceActual){
    if(this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual ){
      return true;
    }else{
      return false;
    }
  }



  estaEntreLimites2(indiceActual){
    if(this.limiteSuperior2 > indiceActual && this.limiteInferior2 < indiceActual ){
      return true;
    }else{
      return false;
    }
  }

  orderByMovSalida(){
    this.movimientos_salida.reverse();
  }

  orderByMovEntrada(){
    this.movimientos_entrada.reverse();
  }
}
