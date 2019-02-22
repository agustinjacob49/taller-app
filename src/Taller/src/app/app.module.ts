import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// servicios
import { HeroesService } from './services/heroes.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VentaComponent } from './components/ventas/venta.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ClienteComponent } from './components/clientes/cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesMongoService } from './services/clientes-mongo.service';
import { ArticulosMongoService } from './services/articulos-mongo.service';
import { HomeComponent } from './components/home/home.component';
import { VentasService } from './services/ventas.service';
import { NuevaVentaComponent } from './components/nueva-venta/nueva-venta.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NombreClientePipe } from './pipes/nombre-cliente.pipe';
import { ApellidoClientePipe } from './pipes/apellido-cliente.pipe';
import { VentaClienteComponent } from './components/venta-cliente/venta-cliente.component';
import { PagoCuentaComponent } from './components/pago-cuenta/pago-cuenta.component';
import { NuevoMovimientoComponent } from './components/nuevo-movimiento/nuevo-movimiento.component';
import { SalidaDineroComponent } from './components/salida-dinero/salida-dinero.component';
import { VerTotalesComponent } from './components/ver-totales/ver-totales.component';
import { FilterNombrePipe } from './pipes/filter-nombre.pipe';
import { FilterArticuloPipe } from './pipes/filter-articulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    NavbarComponent,
    VentaComponent,
    ClienteComponent,
    ClientesComponent,
    VentasComponent,
    HomeComponent,
    NuevaVentaComponent,
    FilterPipe,
    NombreClientePipe,
    ApellidoClientePipe,
    VentaClienteComponent,
    PagoCuentaComponent,
    NuevoMovimientoComponent,
    SalidaDineroComponent,
    VerTotalesComponent,
    FilterNombrePipe,
    FilterArticuloPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [
    HeroesService,
    ClientesMongoService,
    ArticulosMongoService,
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
