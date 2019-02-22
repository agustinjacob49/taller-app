import { Component, OnInit } from '@angular/core';
import { Venta } from '../../Venta';
import { VentasService } from '../../services/ventas.service';
import { Movimiento } from '../../Movimiento';
import { MovimientosService } from '../../services/movimientos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public fecha;
  public ventasDelDia:number = 0;
  public ingresosDelDia:number = 0;
  public egresosDelDia:number = 0;
  public ventas:Venta[] = [];
  public movimientos_entrada:Movimiento[] = [];
  public movimientos:Movimiento[] = [];
  public movimientos_salida:Movimiento[] = [];
  constructor(private _ventasService : VentasService,private _movService:MovimientosService) { }

  ngOnInit() {
    var currentDate = new Date()
    var day=('0'+(currentDate.getDate())).slice(-2)
    var month=('0'+(currentDate.getMonth()+1)).slice(-2)
    var year = currentDate.getFullYear()
    this.fecha =  day + "/" + month + "/" + year;
    
    
    
    this._movService.getmovimientos().subscribe(
      result => this.movimientos = result,
      err => console.log("ERROR", err),
      ()=>{
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


  calcularMontos(){
    this.ventasDelDia = 0
    var f = new Date();
    let fechaHoy = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    for (let k of this.ventas){
        if(k.fechaActualizacion.includes(fechaHoy) ){
          this.ventasDelDia +=k.montoTotal;
        }
    }

    for (let a of this.movimientos_entrada){
      if(a.fechaActualizacion.includes(fechaHoy) ){
        this.ingresosDelDia +=a.montoTotal;
      }
    }

    for (let b of this.movimientos_salida){
      if(b.fechaActualizacion.includes(fechaHoy) ){
        this.egresosDelDia +=b.montoTotal;
      }
    }
  }

}
