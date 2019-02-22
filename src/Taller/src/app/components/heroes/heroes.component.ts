import { Component, OnInit } from '@angular/core';
import { ArticulosMongoService } from '../../services/articulos-mongo.service';
import { Articulo } from '../../Articulo';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  articulos: Articulo[] = [];
  loading = true;
  public searchText:string;
  public limiteInferior = -1;
  public limiteSuperior = 10;

  constructor(private _articulosMongoService: ArticulosMongoService) {
  }

  ngOnInit() {
    this._articulosMongoService.getarticulos().subscribe(
      articulos=> {
      this.articulos = articulos;
    },
  error=> console.log(error),
  () => this.loading = false);

    
  }

  deleteArticulo(id, i){
    console.log("ID : ", id, " I : ", i);
    this._articulosMongoService.deletearticulo(id)
    .subscribe((data)=>{
      console.log(data);
      this.articulos.splice(i,1);
    });
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
