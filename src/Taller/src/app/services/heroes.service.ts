import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Articulo } from '../interfaces/articulo.interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  private itemsCollection: AngularFirestoreCollection<Articulo>;

  public articulos: Articulo[] = [];
  public usuario: any = {};
  public keysA :any [] = [];
  public aticulas:any [] = [];

  constructor( private afs: AngularFirestore) {

  }

   login( proveedor: string ) {

    /* if( proveedor === 'google' ){
       this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }else{
       this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
     }*/

   }

   logout() {
    /* this.usuario = {};
     this.afAuth.auth.signOut();
     */
   }


  cargarArticulos() {
    this.aticulas = [];
    this.itemsCollection = this.afs.collection<Articulo>('articulos', ref => ref.orderBy('fechaActualizacion', 'desc'));


    this.afs.collection("articulos").ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.aticulas.push(doc.data());
          this.aticulas[this.aticulas.length - 1].key$ = doc.id;
      });
    });


    return this.aticulas;


  }


  getArticulo(id: any){
      return this.aticulas[id];
  }
  
  nuevoArticulo(art:Articulo){
    this.itemsCollection = this.afs.collection('articulos');
    art.fechaActualizacion = new Date().getTime();
    let keyTemporal:any;

    this.itemsCollection.add(art).then((resp)=>{
      console.log(art);
    } );
    

    return this.aticulas.length - 1;

  }

  eliminarArticulo(id:any ){
    console.log(this.aticulas);

  for (let index = 0; index < this.aticulas.length; index++) {
    if (this.aticulas[index].key$ == id){
      this.aticulas.splice(index, 1);
    }
    
  }

    //this.aticulas.splice(id,1);
    this.afs.collection('articulos').doc(id).ref.delete();
  }

 actualizarArticulo(id:string, artUpd:Articulo) {
    this.afs.collection('articulos').doc(id).update({
      "titulo": artUpd.titulo,
      "precio": artUpd.precio,
      "marca": artUpd.marca,
      "cantidad":artUpd.cantidad,
      "fechaActualizacion": new Date().getTime(),
      "descripcion":artUpd.descripcion
    })
    .then((resp)=>{
      console.log("Document uploaded sucesfulli");
    })
    .catch(function(){
      return false;
    });
  }

}
