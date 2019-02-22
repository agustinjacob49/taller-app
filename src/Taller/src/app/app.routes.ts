import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";
import { ClienteComponent } from './components/clientes/cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentaComponent } from './components/ventas/venta.component';
import { HomeComponent } from './components/home/home.component';
import { NuevaVentaComponent } from './components/nueva-venta/nueva-venta.component';
import { VentaClienteComponent } from './components/venta-cliente/venta-cliente.component';
import { NuevoMovimientoComponent } from './components/nuevo-movimiento/nuevo-movimiento.component';
import { SalidaDineroComponent } from './components/salida-dinero/salida-dinero.component';
import { VerTotalesComponent } from './components/ver-totales/ver-totales.component';



const app_routes: Routes = [
  { path: 'articulos', component: HeroesComponent },
  { path: 'articulo/:id', component: HeroeComponent },  
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'venta/:id', component: VentaComponent },
  { path: 'ventaCliente/:id', component: VentaClienteComponent },
  { path: 'ventaNueva', component: NuevaVentaComponent },
  { path: 'nuevoMovimiento', component: NuevoMovimientoComponent },
  { path: 'nuevoMovimiento/:id', component: NuevoMovimientoComponent },
  { path: 'salidaDinero', component: SalidaDineroComponent },
  { path: 'verTotales', component: VerTotalesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
