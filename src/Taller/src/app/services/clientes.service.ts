import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cliente } from '../interfaces/cliente.interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private itemsCollection: AngularFirestoreCollection<Cliente>;

  public articulos: Cliente[] = [];
  public usuario: any = {};
  public keysA :any [] = [];
  public clientes:any [] = [];

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


  cargarClientes() {
    this.clientes = [];
    this.itemsCollection = this.afs.collection<Cliente>('clientes', ref => ref.orderBy('fechaActualizacion', 'desc'));


    this.afs.collection("clientes").ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.clientes.push(doc.data());
          this.clientes[this.clientes.length - 1].key$ = doc.id;
      });
    });


    return this.clientes;


  }


  getCliente(id: any){
      return this.clientes[id];
  }
  
  nuevoCliente(_cli:Cliente){
    this.itemsCollection = this.afs.collection('clientes');
    _cli.fechaActualizacion = new Date().getTime().toString();
    let keyTemporal:any;

    this.itemsCollection.add(_cli).then((resp)=>{
      console.log(_cli);
    } );
    

    return this.clientes.length - 1;

  }

  eliminarCliente(id:any ){
    console.log(this.clientes);

  for (let index = 0; index < this.clientes.length; index++) {
    if (this.clientes[index].key$ == id){
      this.clientes.splice(index, 1);
    }
    
  }

    //this.aticulas.splice(id,1);
    this.afs.collection('clientes').doc(id).ref.delete();
  }

 actualizarCliente(id:string, cliUpd:Cliente) {
    this.afs.collection('articulos').doc(id).update({
      "nombre": cliUpd.nombre,
      "apellido": cliUpd.apellido,
      "direccion": cliUpd.direccion,
      "email":cliUpd.email,
      "telefono":cliUpd.telefono ,
      "vehiculo":cliUpd.vehiculo,
      "fechaActualizacion":new Date().getTime().toString()
    })
    .then((resp)=>{
      console.log("Document uploaded sucesfulli");
    })
    .catch(function(){
      return false;
    });
  }

}
