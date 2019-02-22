import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Articulo } from '../../Articulo';
import { ArticulosMongoService } from '../../services/articulos-mongo.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public articulo : Articulo = {
    titulo :"",
    marca :"",
    cantidad :0,
    fechaActualizacion : 0,
    descripcion :""
  }

  nuevo:boolean = false;
  id:string;
  guardado:boolean = false;

  constructor(private _articulosService: ArticulosMongoService,
              private router:Router,
              private route:ActivatedRoute ){

    this.route.params
        .subscribe( parametros=>{

          this.id = parametros['id']
          if( this.id !== "nuevo" ){
            this._articulosService.getarticulo(this.id).subscribe(
              articulo=> {
              this.articulo = articulo;
              console.log(this.articulo);},
              error => console.log(error),
              () => {
                if(!this.articulo.cantidad) {
                  alert("SIN STOCK");
                }
               }
            );
          }
        });

  }

  ngOnInit() {
  }

  calcularPrecio(){
    let pMayorista: number = this.articulo.precioMayorista;
    let pgananciaPorcentaje:number = this.articulo.gananciaPorcentaje;
    if (this.articulo.gananciaPorcentaje > 0){
        this.articulo.precio = (pMayorista + ( (pMayorista * pgananciaPorcentaje ) /100));
    }
    console.log(this.articulo.precio);
  }

  guardar(){
    
    
    if( this.id == "nuevo" ){
      // insertando
      
      
      this._articulosService.addarticulo(this.articulo)
      .subscribe( (articulo) =>{
        console.log(this.articulo);
        this.guardado = true;
      });
      this.router.navigate(['/articulos']);

      
    }else{
      console.log("Actualizar el articulo : ", this.articulo);
      this._articulosService.updatearticulo(this.articulo)
      .subscribe( (resp) =>{
        console.log(resp);
      });
      this.guardado = true;
    }

  }

  agregarNuevo( forma:NgForm ){

    this.router.navigate(['/articulo','nuevo']);

    forma.reset({
    });

  }

  regresar(){
    this.router.navigate(['/articulos']);
  }

}
