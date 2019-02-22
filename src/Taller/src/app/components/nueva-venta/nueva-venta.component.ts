import { Movimiento } from '../../Movimiento';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Cliente } from '../../Cliente';
import { Venta } from '../../Venta';
import { Articulo } from '../../Articulo';
import { ClientesMongoService } from '../../services/clientes-mongo.service';
import { ArticulosMongoService } from '../../services/articulos-mongo.service';
import { VentasService } from '../../services/ventas.service';
import { MovimientosService } from '../../services/movimientos.service';


@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styles: []
})
export class NuevaVentaComponent implements OnInit {
  
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

  public movimiento :Movimiento = {
    idCliente:"",
    montoTotal:0,
    notas: "",
    medioPago:"",
    esAFavor:false,
    salidaDinero:false
  }

  public clientes : Cliente[] = [];
  public articulos: Articulo[] = [];
  loading:boolean = false;
  public searchText:string ="";
  public limiteInferior = -1;
  public limiteSuperior = 10;


  

  
  constructor(private router:Router,
    private route:ActivatedRoute ,
    private _ventasService:VentasService,
    private _clientesService:ClientesMongoService,
    private _articulosMongoService:ArticulosMongoService,
    private _movimientosService:MovimientosService) { 


    }

  ngOnInit() {
    this._articulosMongoService.getarticulos().subscribe(articulos=> {
      this.articulos = articulos;
      this.eliminarSinStock();
    });
    
    this._clientesService.getClientes().subscribe(clientes=> {
      this.clientes = clientes;
    });

  }

  guardar(){

    if(this.venta.medioPago == ""){
      alert("Seleccione un medio de pago");
      return false;
    }
    
    if(this.venta.medioPago == "EFECTIVO"){
      this.venta.estaPago = true;
    }

    if(this.venta.medioPago == "TARJ"){
      this.venta.estaPago = true;
    }


    if(this.venta.medioPago == "CTACTE"){
      this.venta.estaPago = false;
    }

   


    if(this.venta.articulos.length == 0) {
      alert("Agregue articulos a su venta");
      return false;
    }else{

      if (!this.movimiento.esAFavor){
        this.venta.estaPago = false;
      }

      this.movimiento.montoTotal = this.venta.montoTotal;
      this.movimiento.idCliente = this.venta.idCliente;
      this.movimiento.medioPago = this.venta.medioPago;
      this._ventasService.addventa(this.venta)
      .subscribe( (venta) =>{
        console.log(this.venta);
        this.movimiento.notas = "Por venta id : " + venta._id;
        for (let index = 0; index < this.venta.articulos.length; index++) {
          let i = this.getArticuloId(this.venta.articulos[index]._id);
          
          this.articulos[i].cantidad -= this.venta.articulos[index].cantidad;

          this._articulosMongoService.updatearticulo(this.articulos[i])
          .subscribe( (resp) =>{
          console.log(resp);
          });
        }
      },
      error => console.log(error),
      ()=>{


        if (this.movimiento.esAFavor){
          this._movimientosService.addmovimiento(this.movimiento).subscribe(
            resp=>console.log(resp),
            error=>console.log(error),
            ()=> {
              this.router.navigate(['/ventas']);
            }
          );
        }

        this.router.navigate(['/ventas']);
        
      }
    
    );
    

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

  agregarArticulo(k:Articulo){

    let existe = this.existeEnLaVenta(k);

    if (this.venta.articulos.length == 0  ) {
      existe = -2;
    }
   

    if (existe != -2 ){
      if (this.stockControl(this.venta.articulos[existe])){
        this.venta.articulos[existe].cantidad += 1;
      }
     
    }else{
      this.venta.articulos.push(k);
      let tam = this.venta.articulos.length -1;
      this.venta.articulos[tam].cantidad = 1;
    }

    this._articulosMongoService.getarticulos().subscribe(articulos=> {
      this.articulos = articulos;
      this.eliminarSinStock();
    });
     

    this.calcularTotal();
  }

  existeEnLaVenta(_k:Articulo){
    console.log(this.venta.articulos.length);
    for (let index = 0; index < this.venta.articulos.length; index++) {
      if( this.venta.articulos[index]._id == _k._id ){
        return index;
      }
    }

    return -2;
  }


  showVenta(){
    console.log(this.venta);
  }



  stockControl(k:Articulo){

    for (let index = 0; index < this.articulos.length; index++){
      if( this.articulos[index]._id == k._id ){
        if (k.cantidad < this.articulos[index].cantidad){
          return true;
        }else{
          return false;
        }
      }
    }
    return false;
   
  }

  calcularTotal(){
    let sum = 0;
    if ( this.venta.articulos.length == 0){
      return 0;
    }
    for (let i = 0; i < this.venta.articulos.length; i++) {
      sum += this.venta.articulos[i].precio * this.venta.articulos[i].cantidad ;
    }
    this.venta.montoTotal = sum;
  }
    

  getArticuloId(id:string){
    for (let index = 0; index < this.articulos.length; index++) {
      if (this.articulos[index]._id == id){
        return index;
      }
      
    }
  }

  eliminarSinStock(){
    for (let index = 0; index < this.articulos.length; index++) {
      if(!this.articulos[index].cantidad){
          this.articulos.splice(index,1);
          this.eliminarSinStock();
      }
    }
  }
  



}
