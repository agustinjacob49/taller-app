(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/heroes.service */ "./src/app/services/heroes.service.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroes_heroe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/heroes/heroe.component */ "./src/app/components/heroes/heroe.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_ventas_venta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ventas/venta.component */ "./src/app/components/ventas/venta.component.ts");
/* harmony import */ var _components_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ventas/ventas.component */ "./src/app/components/ventas/ventas.component.ts");
/* harmony import */ var _components_clientes_cliente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clientes/cliente.component */ "./src/app/components/clientes/cliente.component.ts");
/* harmony import */ var _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clientes/clientes.component */ "./src/app/components/clientes/clientes.component.ts");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/articulos-mongo.service */ "./src/app/services/articulos-mongo.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _components_nueva_venta_nueva_venta_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nueva-venta/nueva-venta.component */ "./src/app/components/nueva-venta/nueva-venta.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_nombre_cliente_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/nombre-cliente.pipe */ "./src/app/pipes/nombre-cliente.pipe.ts");
/* harmony import */ var _pipes_apellido_cliente_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/apellido-cliente.pipe */ "./src/app/pipes/apellido-cliente.pipe.ts");
/* harmony import */ var _components_venta_cliente_venta_cliente_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/venta-cliente/venta-cliente.component */ "./src/app/components/venta-cliente/venta-cliente.component.ts");
/* harmony import */ var _components_pago_cuenta_pago_cuenta_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pago-cuenta/pago-cuenta.component */ "./src/app/components/pago-cuenta/pago-cuenta.component.ts");
/* harmony import */ var _components_nuevo_movimiento_nuevo_movimiento_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/nuevo-movimiento/nuevo-movimiento.component */ "./src/app/components/nuevo-movimiento/nuevo-movimiento.component.ts");
/* harmony import */ var _components_salida_dinero_salida_dinero_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/salida-dinero/salida-dinero.component */ "./src/app/components/salida-dinero/salida-dinero.component.ts");
/* harmony import */ var _components_ver_totales_ver_totales_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ver-totales/ver-totales.component */ "./src/app/components/ver-totales/ver-totales.component.ts");
/* harmony import */ var _pipes_filter_nombre_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/filter-nombre.pipe */ "./src/app/pipes/filter-nombre.pipe.ts");
/* harmony import */ var _pipes_filter_articulo_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/filter-articulo.pipe */ "./src/app/pipes/filter-articulo.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// servicios

// Pipes
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_12__["HeroesComponent"],
                _components_heroes_heroe_component__WEBPACK_IMPORTED_MODULE_13__["HeroeComponent"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_10__["KeysPipe"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _components_ventas_venta_component__WEBPACK_IMPORTED_MODULE_15__["VentaComponent"],
                _components_clientes_cliente_component__WEBPACK_IMPORTED_MODULE_17__["ClienteComponent"],
                _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_18__["ClientesComponent"],
                _components_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_16__["VentasComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_nueva_venta_nueva_venta_component__WEBPACK_IMPORTED_MODULE_23__["NuevaVentaComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipe"],
                _pipes_nombre_cliente_pipe__WEBPACK_IMPORTED_MODULE_25__["NombreClientePipe"],
                _pipes_apellido_cliente_pipe__WEBPACK_IMPORTED_MODULE_26__["ApellidoClientePipe"],
                _components_venta_cliente_venta_cliente_component__WEBPACK_IMPORTED_MODULE_27__["VentaClienteComponent"],
                _components_pago_cuenta_pago_cuenta_component__WEBPACK_IMPORTED_MODULE_28__["PagoCuentaComponent"],
                _components_nuevo_movimiento_nuevo_movimiento_component__WEBPACK_IMPORTED_MODULE_29__["NuevoMovimientoComponent"],
                _components_salida_dinero_salida_dinero_component__WEBPACK_IMPORTED_MODULE_30__["SalidaDineroComponent"],
                _components_ver_totales_ver_totales_component__WEBPACK_IMPORTED_MODULE_31__["VerTotalesComponent"],
                _pipes_filter_nombre_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterNombrePipe"],
                _pipes_filter_articulo_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterArticuloPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
            ],
            providers: [
                _services_heroes_service__WEBPACK_IMPORTED_MODULE_9__["HeroesService"],
                _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_19__["ClientesMongoService"],
                _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_20__["ArticulosMongoService"],
                _services_ventas_service__WEBPACK_IMPORTED_MODULE_22__["VentasService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroes_heroe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heroes/heroe.component */ "./src/app/components/heroes/heroe.component.ts");
/* harmony import */ var _components_clientes_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clientes/cliente.component */ "./src/app/components/clientes/cliente.component.ts");
/* harmony import */ var _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clientes/clientes.component */ "./src/app/components/clientes/clientes.component.ts");
/* harmony import */ var _components_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ventas/ventas.component */ "./src/app/components/ventas/ventas.component.ts");
/* harmony import */ var _components_ventas_venta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ventas/venta.component */ "./src/app/components/ventas/venta.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nueva_venta_nueva_venta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nueva-venta/nueva-venta.component */ "./src/app/components/nueva-venta/nueva-venta.component.ts");
/* harmony import */ var _components_venta_cliente_venta_cliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/venta-cliente/venta-cliente.component */ "./src/app/components/venta-cliente/venta-cliente.component.ts");
/* harmony import */ var _components_nuevo_movimiento_nuevo_movimiento_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nuevo-movimiento/nuevo-movimiento.component */ "./src/app/components/nuevo-movimiento/nuevo-movimiento.component.ts");
/* harmony import */ var _components_salida_dinero_salida_dinero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/salida-dinero/salida-dinero.component */ "./src/app/components/salida-dinero/salida-dinero.component.ts");
/* harmony import */ var _components_ver_totales_ver_totales_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ver-totales/ver-totales.component */ "./src/app/components/ver-totales/ver-totales.component.ts");













var app_routes = [
    { path: 'articulos', component: _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__["HeroesComponent"] },
    { path: 'articulo/:id', component: _components_heroes_heroe_component__WEBPACK_IMPORTED_MODULE_2__["HeroeComponent"] },
    { path: 'cliente/:id', component: _components_clientes_cliente_component__WEBPACK_IMPORTED_MODULE_3__["ClienteComponent"] },
    { path: 'clientes', component: _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__["ClientesComponent"] },
    { path: 'ventas', component: _components_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_5__["VentasComponent"] },
    { path: 'venta/:id', component: _components_ventas_venta_component__WEBPACK_IMPORTED_MODULE_6__["VentaComponent"] },
    { path: 'ventaCliente/:id', component: _components_venta_cliente_venta_cliente_component__WEBPACK_IMPORTED_MODULE_9__["VentaClienteComponent"] },
    { path: 'ventaNueva', component: _components_nueva_venta_nueva_venta_component__WEBPACK_IMPORTED_MODULE_8__["NuevaVentaComponent"] },
    { path: 'nuevoMovimiento', component: _components_nuevo_movimiento_nuevo_movimiento_component__WEBPACK_IMPORTED_MODULE_10__["NuevoMovimientoComponent"] },
    { path: 'nuevoMovimiento/:id', component: _components_nuevo_movimiento_nuevo_movimiento_component__WEBPACK_IMPORTED_MODULE_10__["NuevoMovimientoComponent"] },
    { path: 'salidaDinero', component: _components_salida_dinero_salida_dinero_component__WEBPACK_IMPORTED_MODULE_11__["SalidaDineroComponent"] },
    { path: 'verTotales', component: _components_ver_totales_ver_totales_component__WEBPACK_IMPORTED_MODULE_12__["VerTotalesComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes);


/***/ }),

/***/ "./src/app/components/clientes/cliente.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/clientes/cliente.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cliente : <small>{{ cliente.nombre + ' ' + cliente.apellido | uppercase }}</small></h3>\n<button (click)=\"regresar()\" class=\"btn btn-outline-danger\">\n  Regresar\n</button>\n<button (click)=\"agregarNuevo(forma)\" type=\"button\" class=\"btn btn-outline-success\">\n  Nuevo\n</button>\n<hr>\n<div *ngIf=\"guardado\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>Guardado</strong>\n</div>\n\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-10\">\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n\n            <div class=\"form-group\">\n                <label>Nombre</label>\n                <input [(ngModel)]=\"cliente.nombre\" name=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del cliente\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Apellido</label>\n                <input [(ngModel)]=\"cliente.apellido\" name=\"apellido\" type=\"text\" class=\"form-control\" placeholder=\"Apellido\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Direccion</label>\n                <input [(ngModel)]=\"cliente.direccion\" name=\"direccion\" type=\"text\" class=\"form-control\" placeholder=\"Direccion\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input [(ngModel)]=\"cliente.email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Telefono</label>\n                <input [(ngModel)]=\"cliente.telefono\" name=\"telefono\" type=\"text\" class=\"form-control\" placeholder=\"3455XXXXX\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Vehiculo <small>(Opcional)</small></label>\n                <input [(ngModel)]=\"cliente.vehiculo\" name=\"vehiculo\" type=\"text\" class=\"form-control\" placeholder=\"Ej: VW BORA\">\n            </div>\n\n            <div class=\"form-group\">\n                <button [disabled]=\"!forma.valid\" type=\"submit\" class=\"btn btn-outline-primary\">\n          Guardar carmbios\n        </button>\n            </div>\n\n        </form>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/clientes/cliente.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/clientes/cliente.component.ts ***!
  \**********************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(router, route, _clienteMongoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._clienteMongoService = _clienteMongoService;
        this.cliente = {
            nombre: "",
            apellido: "",
            direccion: "",
            email: "",
            telefono: "",
            vehiculo: ""
        };
        this.id = "";
        this.nuevo = false;
        this.guardado = false;
        this.route.params
            .subscribe(function (parametros) {
            _this.id = parametros['id'];
            if (_this.id !== "nuevo") {
                _this._clienteMongoService.getCliente(_this.id).subscribe(function (cliente) {
                    _this.cliente = cliente;
                    console.log(_this.cliente);
                });
            }
        });
    }
    ClienteComponent.prototype.ngOnInit = function () {
    };
    ClienteComponent.prototype.guardar = function () {
        var _this = this;
        if (this.id == "nuevo") {
            // insertando
            this.cliente.estadoCliente = true;
            this._clienteMongoService.addCliente(this.cliente)
                .subscribe(function (cliente) {
                console.log(_this.cliente);
                _this.guardado = true;
            });
            this.router.navigate(['/clientes']);
        }
        else {
            console.log("Actualizar el cliente : ", this.cliente);
            this._clienteMongoService.updateCliente(this.cliente)
                .subscribe(function (resp) {
                console.log(resp);
            });
            this.guardado = true;
        }
    };
    ClienteComponent.prototype.agregarNuevo = function (forma) {
        this.router.navigate(['/cliente', 'nuevo']);
        forma.reset({});
    };
    ClienteComponent.prototype.regresar = function () {
        this.router.navigate(['/clientes']);
    };
    ClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__(/*! ./cliente.component.html */ "./src/app/components/clientes/cliente.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/clientes/clientes.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Clientes</h1>\n<hr>\n<button [routerLink]=\"['/cliente','nuevo']\" class=\"btn btn-outline-primary\" type=\"button\" name=\"button\">\n      Nuevo cliente\n</button>\n<hr>\n\n<hr>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n        <div class=\"input-group\" style=\"margin-bottom:20px;\"> <span class=\"input-group-addon\"></span>\n            <input [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Busqueda por apellido..\">\n        </div>\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Nombre</th>\n                        <th>Apellido</th>\n                        <th>Direccion</th>\n                        <th>Email</th>\n                        <th>Telefono</th>\n                        <th>Vehiculo</th>\n                        <th>Ultima actualizacion</th>\n                        <th class=\"text-right\">Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of clientes | filterNombre : searchText; let i = index\">\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.nombre | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.apellido | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.direccion | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.email }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.telefono }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.vehiculo }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\" class=\"text-right w120\">\n                            <button [routerLink]=\"['/ventaCliente', k._id ]\" type=\"button\" class=\"btn btn-outline-primary\">\n                            Ver\n                            </button>\n                            <button [routerLink]=\"['/cliente', k._id ]\" type=\"button\" class=\"btn btn-outline-success\">\n                            Editar\n                             </button>\n                            <button (click)=\"deleteCliente(k._id,i)\" type=\"button\" class=\"btn btn-outline-danger\">\n                            Eliminar\n                           </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                Atras\n            </button>\n            <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                Siguiente\n                </button>\n            </div>\n            <hr>\n            <div *ngIf=\"(clientes | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n            <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                <strong>Cargando...</strong> por favor espere\n            </div>\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/clientes/clientes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.ts ***!
  \***********************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(_clienteMongoService) {
        this._clienteMongoService = _clienteMongoService;
        this.clientes = [];
        this.loading = true;
        this.searchText = "";
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
    }
    ClientesComponent.prototype.ngDoCheck = function () {
        console.log('Método DoCheck lanzado');
    };
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clienteMongoService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        }, function (error) { return console.log(error); }, function () {
            _this.loading = false;
        });
    };
    ClientesComponent.prototype.deleteCliente = function (id, i) {
        var _this = this;
        if (confirm("Esta seguro que desea eliminar el cliente : " + this.clientes[i].nombre + " " + this.clientes[i].apellido)) {
            console.log("ID : ", id, " I : ", i);
            this._clienteMongoService.deleteCliente(id)
                .subscribe(function (data) {
                console.log(data);
                _this.clientes.splice(i, 1);
            });
        }
    };
    ClientesComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    ClientesComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    ClientesComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    ClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/components/clientes/clientes.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_1__["ClientesMongoService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/heroes/heroe.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/heroes/heroe.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Articulo <small>{{ articulo.titulo | uppercase }}</small></h3>\n<button (click)=\"regresar()\" class=\"btn btn-outline-danger\">\n  Regresar\n</button>\n<button (click)=\"agregarNuevo(forma)\" type=\"button\" class=\"btn btn-outline-success\">\n  Nuevo\n</button>\n<hr>\n<div *ngIf=\"guardado\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>Guardado</strong>\n</div>\n\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-10\">\n\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n\n            <div class=\"form-group\">\n                <label>Nombre</label>\n                <input [(ngModel)]=\"articulo.titulo\" name=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del articulo\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Marca</label>\n                <input [(ngModel)]=\"articulo.marca\" name=\"marca\" type=\"text\" class=\"form-control\" placeholder=\"Marca del articulo\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-xs-2\">\n                    <label>Precio mayorista </label> $\n                    <input [(ngModel)]=\"articulo.precioMayorista\" name=\"precioMayorista\" type=\"number\" class=\"form-control\" placeholder=\"$$$$\" required>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-xs-2\">\n                    <label>Ganancia </label> %\n                    <input [(ngModel)]=\"articulo.gananciaPorcentaje\" name=\"gananciaPorcentaje\" type=\"number\" class=\"form-control\" placeholder=\"$$$$\" required (change)=\"calcularPrecio()\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-xs-2\">\n                    <label>Precio final </label> $\n                    <input [(ngModel)]=\"articulo.precio\" name=\"precio\" type=\"number\" class=\"form-control\" placeholder=\"$$$$\" required>\n                </div>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <label>Cantidad en stock</label>\n                <input [(ngModel)]=\"articulo.cantidad\" name=\"cantidad\" type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Descripcion</label>\n                <textarea [(ngModel)]=\"articulo.descripcion\" name=\"descripcion\" type=\"text\" class=\"form-control\">\n        </textarea>\n            </div>\n\n            <div class=\"form-group\">\n                <button [disabled]=\"!forma.valid\" type=\"submit\" class=\"btn btn-outline-primary\">\n          Guardar carmbios\n        </button>\n            </div>\n\n        </form>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/heroes/heroe.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/heroes/heroe.component.ts ***!
  \******************************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/articulos-mongo.service */ "./src/app/services/articulos-mongo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(_articulosService, router, route) {
        var _this = this;
        this._articulosService = _articulosService;
        this.router = router;
        this.route = route;
        this.articulo = {
            titulo: "",
            marca: "",
            cantidad: 0,
            fechaActualizacion: 0,
            descripcion: ""
        };
        this.nuevo = false;
        this.guardado = false;
        this.route.params
            .subscribe(function (parametros) {
            _this.id = parametros['id'];
            if (_this.id !== "nuevo") {
                _this._articulosService.getarticulo(_this.id).subscribe(function (articulo) {
                    _this.articulo = articulo;
                    console.log(_this.articulo);
                }, function (error) { return console.log(error); }, function () {
                    if (!_this.articulo.cantidad) {
                        alert("SIN STOCK");
                    }
                });
            }
        });
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent.prototype.calcularPrecio = function () {
        var pMayorista = this.articulo.precioMayorista;
        var pgananciaPorcentaje = this.articulo.gananciaPorcentaje;
        if (this.articulo.gananciaPorcentaje > 0) {
            this.articulo.precio = (pMayorista + ((pMayorista * pgananciaPorcentaje) / 100));
        }
        console.log(this.articulo.precio);
    };
    HeroeComponent.prototype.guardar = function () {
        var _this = this;
        if (this.id == "nuevo") {
            // insertando
            this._articulosService.addarticulo(this.articulo)
                .subscribe(function (articulo) {
                console.log(_this.articulo);
                _this.guardado = true;
            });
            this.router.navigate(['/articulos']);
        }
        else {
            console.log("Actualizar el articulo : ", this.articulo);
            this._articulosService.updatearticulo(this.articulo)
                .subscribe(function (resp) {
                console.log(resp);
            });
            this.guardado = true;
        }
    };
    HeroeComponent.prototype.agregarNuevo = function (forma) {
        this.router.navigate(['/articulo', 'nuevo']);
        forma.reset({});
    };
    HeroeComponent.prototype.regresar = function () {
        this.router.navigate(['/articulos']);
    };
    HeroeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroe',
            template: __webpack_require__(/*! ./heroe.component.html */ "./src/app/components/heroes/heroe.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ArticulosMongoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "./src/app/components/heroes/heroes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Articulos</h1>\n<hr>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n        <button [routerLink]=\"['/articulo','nuevo']\" class=\"btn btn-outline-primary\" type=\"button\" name=\"button\">\n      Nuevo articulo\n    </button>\n    </div>\n</div>\n<br>\n\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n        <div class=\"input-group\" style=\"margin-bottom:20px;\"> <span class=\"input-group-addon\"></span>\n            <input [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Busqueda por nombre de articulo..\">\n        </div>\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Titulo</th>\n                        <th>Marca</th>\n                        <th>Descripcion</th>\n                        <th>Cantidad</th>\n                        <th>Ultima actualizacion</th>\n                        <th>Precio mayorista</th>\n                        <th>Ganancia</th>\n                        <th>Precio final</th>\n                        <th class=\"text-right\">Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of articulos | filterArticulo : searchText ; let i = index\">\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.titulo | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.marca | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.descripcion | uppercase}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.cantidad }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">${{ k.precioMayorista}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.gananciaPorcentaje}}%</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">${{ k.precio}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\" class=\"text-right w120\">\n                            <button [routerLink]=\"['/articulo', k._id]\" type=\"button\" class=\"btn btn-outline-success\">\n                Editar\n              </button>\n                            <button (click)=\"deleteArticulo(k._id, i)\" type=\"button\" class=\"btn btn-outline-danger\">\n                Eliminar\n              </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                Atras\n            </button>\n            <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                Siguiente\n                </button>\n            </div>\n            <hr>\n            <div *ngIf=\"(articulos | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n            <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                <strong>Cargando...</strong> por favor espere\n            </div>\n\n\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/articulos-mongo.service */ "./src/app/services/articulos-mongo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(_articulosMongoService) {
        this._articulosMongoService = _articulosMongoService;
        this.articulos = [];
        this.loading = true;
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articulosMongoService.getarticulos().subscribe(function (articulos) {
            _this.articulos = articulos;
        }, function (error) { return console.log(error); }, function () { return _this.loading = false; });
    };
    HeroesComponent.prototype.deleteArticulo = function (id, i) {
        var _this = this;
        console.log("ID : ", id, " I : ", i);
        this._articulosMongoService.deletearticulo(id)
            .subscribe(function (data) {
            console.log(data);
            _this.articulos.splice(i, 1);
        });
    };
    HeroesComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    HeroesComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    HeroesComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/components/heroes/heroes.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_1__["ArticulosMongoService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <hr>\n    <h1>Bienvenido ! - \"Cacho Mecanica\"\n        <h4 class=\"float-right\" style=\"margin-top:20px;\">Fecha : {{fecha}}</h4>\n    </h1>\n    <hr>\n\n\n    <div class=\"col-md-6\">\n        <div class=\"row\">\n            <div>\n                <h3 class=\"text-right\">Ventas del dia : $<strong>{{ventasDelDia}}</strong></h3>\n            </div>\n\n        </div>\n\n    </div>\n    <hr>\n\n    <div class=\"col-md-6\">\n\n        <div class=\"row\">\n            <div>\n                <h3 class=\"text-right\">Ingresos del dia : $<strong>{{ingresosDelDia}}</strong></h3>\n            </div>\n        </div>\n\n\n    </div>\n\n    <hr>\n\n    <div class=\"col-md-6\">\n\n        <div class=\"row\">\n            <div>\n                <h3 class=\"text-right\">Egresos del dia : $<strong>{{egresosDelDia}}</strong></h3>\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018:\n        <a href=\"https://www.linkedin.com/in/jacobsenagustin28/\"> Agustin Jacobsen - Linkedin</a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_ventasService, _movService) {
        this._ventasService = _ventasService;
        this._movService = _movService;
        this.ventasDelDia = 0;
        this.ingresosDelDia = 0;
        this.egresosDelDia = 0;
        this.ventas = [];
        this.movimientos_entrada = [];
        this.movimientos = [];
        this.movimientos_salida = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentDate = new Date();
        var day = ('0' + (currentDate.getDate())).slice(-2);
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var year = currentDate.getFullYear();
        this.fecha = day + "/" + month + "/" + year;
        this._movService.getmovimientos().subscribe(function (result) { return _this.movimientos = result; }, function (err) { return console.log("ERROR", err); }, function () {
            for (var index = 0; index < _this.movimientos.length; index++) {
                if (_this.movimientos[index].esAFavor) {
                    _this.movimientos_entrada.push(_this.movimientos[index]);
                }
            }
            for (var index = 0; index < _this.movimientos.length; index++) {
                if (_this.movimientos[index].salidaDinero) {
                    _this.movimientos_salida.push(_this.movimientos[index]);
                }
            }
            _this._ventasService.getventas().subscribe(function (ventas) { return _this.ventas = ventas; }, function (err) { return console.log("ERROR", err); }, function () {
                console.log("LISTO");
                _this.calcularMontos();
            });
        });
    };
    HomeComponent.prototype.calcularMontos = function () {
        this.ventasDelDia = 0;
        var f = new Date();
        var fechaHoy = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
        for (var _i = 0, _a = this.ventas; _i < _a.length; _i++) {
            var k = _a[_i];
            if (k.fechaActualizacion.includes(fechaHoy)) {
                this.ventasDelDia += k.montoTotal;
            }
        }
        for (var _b = 0, _c = this.movimientos_entrada; _b < _c.length; _b++) {
            var a = _c[_b];
            if (a.fechaActualizacion.includes(fechaHoy)) {
                this.ingresosDelDia += a.montoTotal;
            }
        }
        for (var _d = 0, _e = this.movimientos_salida; _d < _e.length; _d++) {
            var b = _e[_d];
            if (b.fechaActualizacion.includes(fechaHoy)) {
                this.egresosDelDia += b.montoTotal;
            }
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__["VentasService"], _services_movimientos_service__WEBPACK_IMPORTED_MODULE_2__["MovimientosService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nueva-venta/nueva-venta.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nueva-venta/nueva-venta.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nueva venta</h3>\n<hr>\n<div *ngIf=\"guardado\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>Guardado</strong>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n            <div class=\"form-group text-left\">\n                <button [disabled]=\"!forma.valid\" type=\"submit\" class=\"btn btn-outline-primary\">\n                    Guardar carmbios\n                    </button>\n            </div>\n            <hr>\n            <div class=\"form-group row\">\n                <label class=\"col-2 col-form-label\">Cliente : </label>\n                <div class=\"col-md-8\">\n                    <select [(ngModel)]=\"venta.idCliente\" class=\"form-control\" name=\"idClient\" required>\n                     <option value=\"\">- Seleccione un cliente -</option>\n                     <option *ngFor=\"let clienteP of clientes\"\n                          [value]=\"clienteP._id\"> {{ clienteP.nombre + ' ' + clienteP.apellido }} </option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-2 col-form-label\">Medio de pago : </label>\n                <div class=\"col-md-8\">\n                    <select [(ngModel)]=\"venta.medioPago\" class=\"form-control\" name=\"medioPago\" required>\n                         <option value=\"\">- Seleccione medio de pago -</option>\n                         <option value=\"EFECTIVO\"> Efectivo </option>\n                         <option value=\"TARJ\"> Tarjeta de credito</option>\n                         <option value=\"CTACTE\"> A pagar - Cta Cte </option>\n                      </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Tipo de movimiento : </label> <br>\n                <input [(ngModel)]=\"movimiento.esAFavor\" type=\"radio\" name=\"esAFavor\" [value]=\"true\" checked> Pago en el acto <br>\n                <input [(ngModel)]=\"movimiento.esAFavor\" type=\"radio\" name=\"esAFavor\" [value]=\"false\"> A cuenta - Deuda\n            </div>\n\n\n        </form>\n\n\n        <hr>\n\n        <div class=\"row animated fadeIn fast\">\n            <div class=\"col-md-12\">\n                <div class=\"input-group\" style=\"margin-bottom:20px;\"> <span class=\"input-group-addon\"></span>\n                    <input [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Busqueda..\">\n                </div>\n                <div class=\"table-responsive\">\n\n                    <table class=\"table\">\n                        <thead class=\"thead-inverse\">\n                            <tr>\n                                <th>#</th>\n                                <th>Titulo</th>\n                                <th>Marca</th>\n                                <th>Descripcion</th>\n                                <th>Cantidad</th>\n                                <th>Ultima actualizacion</th>\n                                <th>Precio</th>\n                                <th class=\"text-right\">Opciones</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let k of articulos | filter : searchText; let i = index\">\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ k.titulo | uppercase}}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ k.marca | uppercase}}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ k.descripcion | uppercase}}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ k.cantidad }}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                                <td *ngIf=\"estaEntreLimites(i)\">${{ k.precio}}</td>\n                                <td class=\"text-right w120\" *ngIf=\"estaEntreLimites(i)\">\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"agregarArticulo(k)\">\n                            Agregar\n                            </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                Atras\n            </button>\n                    <div class=\"float-right\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                Siguiente\n                </button>\n                    </div>\n                    <div *ngIf=\"(articulos | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                        <strong>No hay</strong> registros que mostrar\n                    </div>\n                    <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                        <strong>Cargando...</strong> por favor espere\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <hr>\n        <br>\n        <h2>Articulos de la venta</h2>\n        <div class=\"row animated fadeIn fast\">\n            <div class=\"col-md-12\">\n                <div class=\"table-responsive\">\n\n                    <table class=\"table\">\n                        <thead class=\"thead-inverse\">\n                            <tr>\n                                <th>#</th>\n                                <th>Titulo</th>\n                                <th>Marca</th>\n                                <th>Descripcion</th>\n                                <th>Cantidad</th>\n                                <th>Ultima actualizacion</th>\n                                <th>Precio/U</th>\n                                <th>Precio total</th>\n                                <th class=\"text-right\">Opciones</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let ks of venta.articulos ; let i = index\">\n                                <td>{{ i + 1 }}</td>\n                                <td>{{ ks.titulo | uppercase}}</td>\n                                <td>{{ ks.marca | uppercase}}</td>\n                                <td>{{ ks.descripcion | uppercase}}</td>\n                                <td>{{ ks.cantidad }}</td>\n                                <td>{{ ks.fechaActualizacion }}</td>\n                                <td>${{ ks.precio}}</td>\n                                <td>${{ ks.precio * ks.cantidad}}</td>\n                                <td class=\"text-right w120\">\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"showVenta()\">\n                            Eliminar\n                            </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div *ngIf=\"(venta.articulos | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                        <strong>No hay</strong> articulos agregados a la venta\n                    </div>\n                    <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                        <strong>Cargando...</strong> por favor espere\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n\n        <hr>\n        <h1 class=\"text-right\">Total : $<strong>{{venta.montoTotal}}</strong></h1>\n        <hr>\n\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nueva-venta/nueva-venta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nueva-venta/nueva-venta.component.ts ***!
  \*****************************************************************/
/*! exports provided: NuevaVentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaVentaComponent", function() { return NuevaVentaComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/articulos-mongo.service */ "./src/app/services/articulos-mongo.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevaVentaComponent = /** @class */ (function () {
    function NuevaVentaComponent(router, route, _ventasService, _clientesService, _articulosMongoService, _movimientosService) {
        this.router = router;
        this.route = route;
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this._articulosMongoService = _articulosMongoService;
        this._movimientosService = _movimientosService;
        this.id = "";
        this.nuevo = false;
        this.guardado = false;
        this.venta = {
            idCliente: "",
            montoTotal: 0,
            articulos: [],
            notas: "",
            fechaActualizacion: "",
            estaPago: false,
            medioPago: ""
        };
        this.movimiento = {
            idCliente: "",
            montoTotal: 0,
            notas: "",
            medioPago: "",
            esAFavor: false,
            salidaDinero: false
        };
        this.clientes = [];
        this.articulos = [];
        this.loading = false;
        this.searchText = "";
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
    }
    NuevaVentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articulosMongoService.getarticulos().subscribe(function (articulos) {
            _this.articulos = articulos;
            _this.eliminarSinStock();
        });
        this._clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        });
    };
    NuevaVentaComponent.prototype.guardar = function () {
        var _this = this;
        if (this.venta.medioPago == "") {
            alert("Seleccione un medio de pago");
            return false;
        }
        if (this.venta.medioPago == "EFECTIVO") {
            this.venta.estaPago = true;
        }
        if (this.venta.medioPago == "TARJ") {
            this.venta.estaPago = true;
        }
        if (this.venta.medioPago == "CTACTE") {
            this.venta.estaPago = false;
        }
        if (this.venta.articulos.length == 0) {
            alert("Agregue articulos a su venta");
            return false;
        }
        else {
            if (!this.movimiento.esAFavor) {
                this.venta.estaPago = false;
            }
            this.movimiento.montoTotal = this.venta.montoTotal;
            this.movimiento.idCliente = this.venta.idCliente;
            this.movimiento.medioPago = this.venta.medioPago;
            this._ventasService.addventa(this.venta)
                .subscribe(function (venta) {
                console.log(_this.venta);
                _this.movimiento.notas = "Por venta id : " + venta._id;
                for (var index = 0; index < _this.venta.articulos.length; index++) {
                    var i = _this.getArticuloId(_this.venta.articulos[index]._id);
                    _this.articulos[i].cantidad -= _this.venta.articulos[index].cantidad;
                    _this._articulosMongoService.updatearticulo(_this.articulos[i])
                        .subscribe(function (resp) {
                        console.log(resp);
                    });
                }
            }, function (error) { return console.log(error); }, function () {
                _this._movimientosService.addmovimiento(_this.movimiento).subscribe(function (resp) { return console.log(resp); }, function (error) { return console.log(error); }, function () {
                    _this.router.navigate(['/ventas']);
                });
            });
        }
    };
    NuevaVentaComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    NuevaVentaComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    NuevaVentaComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    NuevaVentaComponent.prototype.agregarArticulo = function (k) {
        var _this = this;
        var existe = this.existeEnLaVenta(k);
        if (this.venta.articulos.length == 0) {
            existe = -2;
        }
        if (existe != -2) {
            if (this.stockControl(this.venta.articulos[existe])) {
                this.venta.articulos[existe].cantidad += 1;
            }
        }
        else {
            this.venta.articulos.push(k);
            var tam = this.venta.articulos.length - 1;
            this.venta.articulos[tam].cantidad = 1;
        }
        this._articulosMongoService.getarticulos().subscribe(function (articulos) {
            _this.articulos = articulos;
            _this.eliminarSinStock();
        });
        this.calcularTotal();
    };
    NuevaVentaComponent.prototype.existeEnLaVenta = function (_k) {
        console.log(this.venta.articulos.length);
        for (var index = 0; index < this.venta.articulos.length; index++) {
            if (this.venta.articulos[index]._id == _k._id) {
                return index;
            }
        }
        return -2;
    };
    NuevaVentaComponent.prototype.showVenta = function () {
        console.log(this.venta);
    };
    NuevaVentaComponent.prototype.stockControl = function (k) {
        for (var index = 0; index < this.articulos.length; index++) {
            if (this.articulos[index]._id == k._id) {
                if (k.cantidad < this.articulos[index].cantidad) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    };
    NuevaVentaComponent.prototype.calcularTotal = function () {
        var sum = 0;
        if (this.venta.articulos.length == 0) {
            return 0;
        }
        for (var i = 0; i < this.venta.articulos.length; i++) {
            sum += this.venta.articulos[i].precio * this.venta.articulos[i].cantidad;
        }
        this.venta.montoTotal = sum;
    };
    NuevaVentaComponent.prototype.getArticuloId = function (id) {
        for (var index = 0; index < this.articulos.length; index++) {
            if (this.articulos[index]._id == id) {
                return index;
            }
        }
    };
    NuevaVentaComponent.prototype.eliminarSinStock = function () {
        for (var index = 0; index < this.articulos.length; index++) {
            if (!this.articulos[index].cantidad) {
                this.articulos.splice(index, 1);
                this.eliminarSinStock();
            }
        }
    };
    NuevaVentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-venta',
            template: __webpack_require__(/*! ./nueva-venta.component.html */ "./src/app/components/nueva-venta/nueva-venta.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_4__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"],
            _services_articulos_mongo_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosMongoService"],
            _services_movimientos_service__WEBPACK_IMPORTED_MODULE_5__["MovimientosService"]])
    ], NuevaVentaComponent);
    return NuevaVentaComponent;
}());



/***/ }),

/***/ "./src/app/components/nuevo-movimiento/nuevo-movimiento.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nuevo-movimiento/nuevo-movimiento.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nuevo movimiento - Entrada caja</h3>\n<button (click)=\"regresar()\" class=\"btn btn-outline-danger\">\n  Regresar\n</button>\n<hr>\n<div *ngIf=\"guardado\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>Guardado</strong>\n</div>\n\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-10\">\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n\n            <div class=\"form-group\">\n                <label>Cliente : </label>\n                <select [(ngModel)]=\"movimiento.idCliente\" class=\"form-control\" name=\"idClient\" required (change)=\"cargarVentas()\" id=\"selectorCliente\">\n                             <option value=\"\">- Seleccione un cliente -</option>\n                             <option *ngFor=\"let clienteP of clientes\"\n                                  [value]=\"clienteP._id\"> {{ clienteP.nombre + ' ' + clienteP.apellido }} </option>\n                    </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Tipo de movimiento : </label> <br>\n                <input [(ngModel)]=\"movimiento.esAFavor\" type=\"radio\" name=\"esAFavor\" [value]=\"true\" checked> Pago\n                <input [(ngModel)]=\"movimiento.esAFavor\" type=\"radio\" name=\"esAFavor\" [value]=\"false\"> Deuda\n            </div>\n\n            <div class=\"form-group\">\n                <label>Concepto</label>\n                <textarea [(ngModel)]=\"movimiento.notas\" name=\"notas\" type=\"text\" class=\"form-control\">\n                    </textarea>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Monto</label> $\n                <input [(ngModel)]=\"movimiento.montoTotal\" name=\"montoTotal\" type=\"number\" class=\"form-control\" placeholder=\"$$$\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Venta asociada : <small>(Opcional)</small></label>\n                <select [(ngModel)]=\"movimiento.idventaAsociada\" class=\"form-control\" name=\"idventaAsociada\">\n                             <option value=\"\">- Seleccione venta -</option>\n                             <option *ngFor=\"let ventaP of ventas_cliente\"\n                                  [value]=\"ventaP._id\"> {{ 'ID : ' +  ventaP._id + ' - TOTAL : ' + ventaP.montoTotal  + ' FECHA : ' + ventaP.fechaActualizacion}} </option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"!forma.valid\" type=\"submit\" class=\"btn btn-outline-primary\">\n                Guardar carmbios\n                </button>\n            </div>\n\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nuevo-movimiento/nuevo-movimiento.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/nuevo-movimiento/nuevo-movimiento.component.ts ***!
  \***************************************************************************/
/*! exports provided: NuevoMovimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoMovimientoComponent", function() { return NuevoMovimientoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuevoMovimientoComponent = /** @class */ (function () {
    function NuevoMovimientoComponent(router, route, _ventasService, _clientesService, _movimientosService) {
        this.router = router;
        this.route = route;
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this._movimientosService = _movimientosService;
        this.clientes = [];
        this.ventas = [];
        this.guardado = false;
        this.movimiento = {
            idCliente: "",
            montoTotal: 0,
            notas: "",
            medioPago: "",
            esAFavor: false,
            salidaDinero: false
        };
        this.ventas_cliente = [];
    }
    NuevoMovimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        });
        this._ventasService.getventas().subscribe(function (ventas) {
            _this.ventas = ventas;
        });
    };
    NuevoMovimientoComponent.prototype.regresar = function () {
        this.router.navigate(['/home']);
    };
    NuevoMovimientoComponent.prototype.cargarVentas = function () {
        console.log("filtrar ventas");
        console.log(this.movimiento.idCliente);
        this.ventas_cliente = [];
        for (var index = 0; index < this.ventas.length; index++) {
            if (this.ventas[index].idCliente == this.movimiento.idCliente) {
                this.ventas_cliente.push(this.ventas[index]);
            }
        }
    };
    NuevoMovimientoComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.movimiento);
        this._movimientosService.addmovimiento(this.movimiento)
            .subscribe(function (movimiento) {
            console.log(_this.movimiento);
            _this.guardado = true;
        });
    };
    NuevoMovimientoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-movimiento',
            template: __webpack_require__(/*! ./nuevo-movimiento.component.html */ "./src/app/components/nuevo-movimiento/nuevo-movimiento.component.html"),
            styles: ['']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"],
            _services_movimientos_service__WEBPACK_IMPORTED_MODULE_4__["MovimientosService"]])
    ], NuevoMovimientoComponent);
    return NuevoMovimientoComponent;
}());



/***/ }),

/***/ "./src/app/components/pago-cuenta/pago-cuenta.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pago-cuenta/pago-cuenta.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pago-cuenta/pago-cuenta.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pago-cuenta/pago-cuenta.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pago-cuenta works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pago-cuenta/pago-cuenta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pago-cuenta/pago-cuenta.component.ts ***!
  \*****************************************************************/
/*! exports provided: PagoCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoCuentaComponent", function() { return PagoCuentaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagoCuentaComponent = /** @class */ (function () {
    function PagoCuentaComponent() {
    }
    PagoCuentaComponent.prototype.ngOnInit = function () {
    };
    PagoCuentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pago-cuenta',
            template: __webpack_require__(/*! ./pago-cuenta.component.html */ "./src/app/components/pago-cuenta/pago-cuenta.component.html"),
            styles: [__webpack_require__(/*! ./pago-cuenta.component.css */ "./src/app/components/pago-cuenta/pago-cuenta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagoCuentaComponent);
    return PagoCuentaComponent;
}());



/***/ }),

/***/ "./src/app/components/salida-dinero/salida-dinero.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/salida-dinero/salida-dinero.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nueva salida de caja</h3>\n<button (click)=\"regresar()\" class=\"btn btn-outline-danger\">\n  Regresar\n</button>\n<hr>\n<div *ngIf=\"guardado\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>Guardado</strong>\n</div>\n\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-10\">\n        <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n\n            <div class=\"form-group\">\n                <label>Cliente/Persona/Entidad : </label>\n                <input [(ngModel)]=\"movimiento.idCliente\" name=\"idCliente\" type=\"text\" class=\"form-control\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Concepto</label>\n                <textarea [(ngModel)]=\"movimiento.notas\" name=\"notas\" type=\"text\" class=\"form-control\" required>\n                    </textarea>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Monto</label> $\n                <input [(ngModel)]=\"movimiento.montoTotal\" name=\"montoTotal\" type=\"number\" class=\"form-control\" placeholder=\"$$$\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <button [disabled]=\"!forma.valid\" type=\"submit\" class=\"btn btn-outline-primary\">\n                Guardar carmbios\n                </button>\n            </div>\n\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/salida-dinero/salida-dinero.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/salida-dinero/salida-dinero.component.ts ***!
  \*********************************************************************/
/*! exports provided: SalidaDineroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaDineroComponent", function() { return SalidaDineroComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalidaDineroComponent = /** @class */ (function () {
    function SalidaDineroComponent(router, route, _ventasService, _clientesService, _movimientosService) {
        this.router = router;
        this.route = route;
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this._movimientosService = _movimientosService;
        this.clientes = [];
        this.ventas = [];
        this.guardado = false;
        this.movimiento = {
            idCliente: "",
            montoTotal: 0,
            notas: "",
            medioPago: "",
            esAFavor: false,
            salidaDinero: true
        };
        this.ventas_cliente = [];
    }
    SalidaDineroComponent.prototype.ngOnInit = function () {
    };
    SalidaDineroComponent.prototype.regresar = function () {
        this.router.navigate(['/home']);
    };
    SalidaDineroComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.movimiento);
        this._movimientosService.addmovimiento(this.movimiento)
            .subscribe(function (movimiento) {
            console.log(_this.movimiento);
            _this.guardado = true;
        });
    };
    SalidaDineroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salida-dinero',
            template: __webpack_require__(/*! ./salida-dinero.component.html */ "./src/app/components/salida-dinero/salida-dinero.component.html"),
            styles: ['']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"],
            _services_movimientos_service__WEBPACK_IMPORTED_MODULE_4__["MovimientosService"]])
    ], SalidaDineroComponent);
    return SalidaDineroComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Cacho <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['home']\">Inicio</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['clientes']\">Clientes</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['articulos']\">Articulos</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Ventas\n                    </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['ventas']\">Ventas</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['ventaNueva']\">Nueva venta</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Movimientos\n                    </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['nuevoMovimiento']\">Nuevo movimiento/Service/Entrada </a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['salidaDinero']\">Nueva compra/Salida</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['verTotales']\">Ver totales</a>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/venta-cliente/venta-cliente.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/venta-cliente/venta-cliente.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Datos del cliente : </h1>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>Nombre</th>\n                        <th>Apellido</th>\n                        <th>Direccion</th>\n                        <th>Email</th>\n                        <th>Telefono</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>{{ cliente.nombre | uppercase}}</td>\n                        <td>{{ cliente.apellido | uppercase}}</td>\n                        <td>{{ cliente.direccion | uppercase}}</td>\n                        <td>{{ cliente.email }}</td>\n                        <td>{{ cliente.telefono }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n</div>\n\n<h2>Ventas</h2>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Id</th>\n                        <th>Articulo/s</th>\n                        <th>Nota</th>\n                        <th (click)=\"orderByFecha()\"> <u>Fecha</u> </th>\n                        <th>Medio de pago</th>\n                        <th>Monto</th>\n                        <th class=\"text-right\">Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of ventas_cliente; let i = index ;\">\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k._id }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ showArticulos(k.articulos) }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.notas }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.medioPago }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">${{ k.montoTotal }}</td>\n                        <td class=\"text-right w120\" *ngIf=\"estaEntreLimites(i)\">\n                            <button [routerLink]=\"['/venta', k._id ]\" type=\"button\" class=\"btn btn-outline-primary\">\n                                      Ver venta\n                                    </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                    Atras\n                </button>\n            <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                    Siguiente\n                    </button>\n            </div>\n            <hr>\n            <div *ngIf=\"ventas.length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> ventas que mostrar\n            </div>\n\n        </div>\n    </div>\n</div>\n<h4>Movimientos</h4>\n\n<hr>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Nota</th>\n                        <th>Tipo de movimiento</th>\n                        <th (click)=\"orderByFechaMov()\"> <u>Fecha</u> </th>\n                        <th>Monto</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of movimientos_cliente; let i = index ;\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ k.notas }}</td>\n                        <td>{{ showDatos(k.esAFavor)}}</td>\n                        <td>{{ k.fechaActualizacion }}</td>\n                        <td>${{ k.montoTotal }}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div *ngIf=\"(movimientos_cliente).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> movimientos que mostrar\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<hr>\n<h1 class=\"text-right\">Total Deuda : <strong>${{deuda}}</strong></h1>\n<hr>\n\n<hr>\n<h1 class=\"text-right\">Total ventas : <strong>${{ventaTotales}}</strong></h1>\n<hr>\n\n<hr>\n<h1 class=\"text-right\">Total pagado : <strong>${{aFavor}}</strong></h1>\n<hr>\n\n<hr>\n<h1 class=\"text-right\" [ngClass]=\"{ 'text-danger' : neto < 0 ,\n                                    'text-success' : neto > 0 ,\n                                    'text-primary' : neto == 0 }\">Total neto : <strong>${{neto}}</strong></h1>\n<hr>\n\n<br>"

/***/ }),

/***/ "./src/app/components/venta-cliente/venta-cliente.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/venta-cliente/venta-cliente.component.ts ***!
  \*********************************************************************/
/*! exports provided: VentaClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaClienteComponent", function() { return VentaClienteComponent; });
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VentaClienteComponent = /** @class */ (function () {
    function VentaClienteComponent(router, route, _ventasService, _clientesService, _movService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this._movService = _movService;
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
        this.deuda = 0;
        this.aFavor = 0;
        this.neto = 0;
        this.ventaTotales = 0;
        this.id = "";
        this.nuevo = false;
        this.guardado = false;
        this.ventas = [];
        this.movimientos = [];
        this.movimientos_cliente = [];
        this.venta = {
            idCliente: "",
            montoTotal: 0,
            articulos: [],
            notas: "",
            fechaActualizacion: "",
            estaPago: false,
            medioPago: ""
        };
        this.cliente = {
            nombre: "",
            apellido: "",
            direccion: "",
            email: "",
            telefono: "",
            vehiculo: ""
        };
        this.loading = false;
        this.ventas_cliente = [];
        this.route.params
            .subscribe(function (parametros) {
            _this.id = parametros['id'];
            console.log(_this.id);
            _this._clientesService.getCliente(_this.id).subscribe(function (cliente) { return _this.cliente = cliente; }, function (err) { return console.log("error" + err); }, function () {
                console.log("Cargado cliente");
                _this._ventasService.getventas().subscribe(function (ventas) { return _this.ventas = ventas; }, function (err) { return console.log("ERROR ", err); }, function () {
                    _this.ventas_cliente.reverse();
                    console.log("COMPLETADA LA CARGA DE VENTAS");
                    for (var index = 0; index < _this.ventas.length; index++) {
                        if (_this.ventas[index].idCliente == _this.cliente._id) {
                            _this.ventas_cliente.push(_this.ventas[index]);
                        }
                    }
                    _this._movService.getmovimientos().subscribe(function (movimientos) { return _this.movimientos = movimientos; }, function (err) { return console.log("ERROR", err); }, function () {
                        console.log("Completada la carga de movimientos");
                        for (var index = 0; index < _this.movimientos.length; index++) {
                            if (_this.movimientos[index].idCliente == _this.cliente._id) {
                                _this.movimientos_cliente.push(_this.movimientos[index]);
                            }
                        }
                        _this.calcularMontos();
                    });
                });
            });
        });
    }
    VentaClienteComponent.prototype.showDatos = function (esAFavor) {
        if (esAFavor) {
            return "PAGO";
        }
        else {
            return "DEUDA";
        }
    };
    VentaClienteComponent.prototype.orderByFecha = function () {
        this.ventas_cliente.reverse();
    };
    VentaClienteComponent.prototype.orderByFechaMov = function () {
        this.movimientos_cliente.reverse();
    };
    VentaClienteComponent.prototype.calcularMontos = function () {
        this.deuda = 0;
        this.neto = 0;
        this.aFavor = 0;
        this.ventaTotales = 0;
        for (var index = 0; index < this.ventas_cliente.length; index++) {
            if (this.ventas_cliente[index].estaPago) {
                this.ventaTotales += this.ventas[index].montoTotal;
            }
        }
        for (var index = 0; index < this.movimientos_cliente.length; index++) {
            if (this.movimientos_cliente[index].esAFavor) {
                this.aFavor += this.movimientos_cliente[index].montoTotal;
            }
            else {
                this.deuda += this.movimientos_cliente[index].montoTotal;
            }
        }
        this.neto = this.aFavor - this.deuda - this.ventaTotales;
    };
    VentaClienteComponent.prototype.showArticulos = function (arr) {
        var arNombres = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var ar = arr_1[_i];
            arNombres.push(ar.titulo);
        }
        return arNombres;
    };
    VentaClienteComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    VentaClienteComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    VentaClienteComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    VentaClienteComponent.prototype.goToMovimiento = function () {
        this.router.navigate(['/nuevoMovimiento']);
    };
    VentaClienteComponent.prototype.ngOnInit = function () {
    };
    VentaClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta-cliente',
            template: __webpack_require__(/*! ./venta-cliente.component.html */ "./src/app/components/venta-cliente/venta-cliente.component.html"),
            styles: ['']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_4__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_3__["ClientesMongoService"],
            _services_movimientos_service__WEBPACK_IMPORTED_MODULE_0__["MovimientosService"]])
    ], VentaClienteComponent);
    return VentaClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/ventas/venta.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/ventas/venta.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Venta ID : {{venta._id}}</h1>\n<hr>\n\n<h4>Fecha : {{venta.fechaActualizacion}}</h4>\n<hr>\n<h4>Datos de cliente : </h4>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>Nombre</th>\n                        <th>Apellido</th>\n                        <th>Direccion</th>\n                        <th>Email</th>\n                        <th>Telefono</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>{{ cliente.nombre | uppercase}}</td>\n                        <td>{{ cliente.apellido | uppercase}}</td>\n                        <td>{{ cliente.direccion | uppercase}}</td>\n                        <td>{{ cliente.email }}</td>\n                        <td>{{ cliente.telefono }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n</div>\n\n<h4>Articulos</h4>\n<hr>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Titulo</th>\n                        <th>Marca</th>\n                        <th>Cantidad</th>\n                        <th>Precio U.</th>\n                        <th>Precio Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of venta.articulos | keys; let i = index\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ venta.articulos[k].titulo | uppercase}}</td>\n                        <td>{{ venta.articulos[k].marca | uppercase}}</td>\n                        <td>{{ venta.articulos[k].cantidad }}</td>\n                        <td>${{ venta.articulos[k].precio}}</td>\n                        <td>${{ venta.articulos[k].precio * venta.articulos[k].cantidad }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <div *ngIf=\"(venta.articulos).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<hr>\n<h1 class=\"text-right\">Total : <strong>${{venta.montoTotal}}</strong></h1>\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n        <button class=\"btn btn-outline-danger\" type=\"button\" name=\"button\" (click)=\"deleteVenta()\">\n      Eliminar venta\n    </button>\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/components/ventas/venta.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/ventas/venta.component.ts ***!
  \******************************************************/
/*! exports provided: VentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaComponent", function() { return VentaComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VentaComponent = /** @class */ (function () {
    function VentaComponent(router, route, _ventasService, _clientesService) {
        this.router = router;
        this.route = route;
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this.id = "";
        this.nuevo = false;
        this.guardado = false;
        this.venta = {
            idCliente: "",
            montoTotal: 0,
            articulos: [],
            notas: "",
            fechaActualizacion: "",
            estaPago: false,
            medioPago: ""
        };
        this.cliente = {
            nombre: "",
            apellido: "",
            direccion: "",
            email: "",
            telefono: "",
            vehiculo: ""
        };
        this.loading = false;
    }
    VentaComponent.prototype.deleteVenta = function () {
        var _this = this;
        console.log("ID : ", this.venta._id);
        this._ventasService.deleteventa(this.venta._id)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log("ERROR", error); }, function () {
            console.log("Listo");
            _this.router.navigate(['/ventas']);
        });
    };
    VentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            _this.id = parametros['id'];
            _this._ventasService.getventa(_this.id).subscribe(function (venta) { return _this.venta = venta; }, function (error) { return console.log(error); }, function () {
                _this._clientesService.getCliente(_this.venta.idCliente).subscribe(function (cliente) { return _this.cliente = cliente; }, function (error) { return console.log(error); }, function () { console.log(_this.cliente); });
            });
        });
    };
    VentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta',
            template: __webpack_require__(/*! ./venta.component.html */ "./src/app/components/ventas/venta.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"]])
    ], VentaComponent);
    return VentaComponent;
}());



/***/ }),

/***/ "./src/app/components/ventas/ventas.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/ventas/ventas.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Ventas</h1>\n<hr>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n        <button [routerLink]=\"['/ventaNueva']\" class=\"btn btn-outline-primary\" type=\"button\" name=\"button\">\n      Nueva venta\n    </button>\n    </div>\n</div>\n<br>\n\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n        <div class=\"input-group\" style=\"margin-bottom:20px;\"> <span class=\"input-group-addon\"></span>\n            <input [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Busqueda por apellido..\">\n        </div>\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Nombre</th>\n                        <th>Apellido</th>\n                        <th>Articulo/s</th>\n                        <th>Nota</th>\n                        <th (click)=\"orderBy()\"> <u>Fecha</u> </th>\n                        <th>Medio de pago</th>\n                        <th>Monto</th>\n                        <th class=\"text-right\">Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of ventas; let i = index ;\">\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ getCliente(k.idCliente) }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ getClienteApellido(k.idCliente)}}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ showArticulos(k.articulos) }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.notas }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.medioPago }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">${{ k.montoTotal }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\" class=\"text-right w120\">\n                            <button [routerLink]=\"['/venta', k._id ]\" type=\"button\" class=\"btn btn-outline-primary\">\n                              Ver venta\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                Atras\n            </button>\n            <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                Siguiente\n                </button>\n            </div>\n\n            <div *ngIf=\"(ventas | keys).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n            <div *ngIf=\"loading\" class=\"alert alert-warning\" role=\"alert\">\n                <strong>Cargando...</strong> por favor espere\n            </div>\n\n\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ventas/ventas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ventas/ventas.component.ts ***!
  \*******************************************************/
/*! exports provided: VentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasComponent", function() { return VentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
/* harmony import */ var _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes-mongo.service */ "./src/app/services/clientes-mongo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VentasComponent = /** @class */ (function () {
    function VentasComponent(_ventasService, _clientesService) {
        this._ventasService = _ventasService;
        this._clientesService = _clientesService;
        this.ventas = [];
        this.clientes = [];
        this.loading = true;
        this.searchText = "";
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
    }
    VentasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ventasService.getventas().subscribe(function (ventas) {
            _this.ventas = ventas;
            _this.ventas.reverse();
        });
        this._clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        });
        this.loading = false;
    };
    VentasComponent.prototype.deleteVenta = function (id, i) {
        var _this = this;
        console.log("ID : ", id, " I : ", i);
        this._ventasService.deleteventa(id)
            .subscribe(function (data) {
            console.log(data);
            _this.ventas.splice(i, 1);
        });
    };
    VentasComponent.prototype.showDatos = function (id) {
        for (var index = 0; index < this.ventas.length; index++) {
            for (var index2 = 0; index2 < this.clientes.length; index2++) {
                if (this.ventas[index].idCliente == this.clientes[index2]._id)
                    return this.clientes[index2].nombre;
            }
        }
    };
    VentasComponent.prototype.showApellido = function (id) {
        for (var index = 0; index < this.ventas.length; index++) {
            for (var index2 = 0; index2 < this.clientes.length; index2++) {
                if (this.ventas[index].idCliente == this.clientes[index2]._id)
                    return this.clientes[index2].apellido;
            }
        }
    };
    VentasComponent.prototype.getCliente = function (id) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cl = _a[_i];
            if (cl._id == id) {
                return cl.nombre;
            }
        }
    };
    VentasComponent.prototype.getClienteApellido = function (id) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cl = _a[_i];
            if (cl._id == id) {
                return cl.apellido;
            }
        }
    };
    VentasComponent.prototype.orderBy = function () {
        this.ventas.reverse();
    };
    VentasComponent.prototype.showArticulos = function (arr) {
        var arNombres = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var ar = arr_1[_i];
            arNombres.push(ar.titulo);
        }
        return arNombres;
    };
    VentasComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    VentasComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    VentasComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    VentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ventas',
            template: __webpack_require__(/*! ./ventas.component.html */ "./src/app/components/ventas/ventas.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__["VentasService"],
            _services_clientes_mongo_service__WEBPACK_IMPORTED_MODULE_2__["ClientesMongoService"]])
    ], VentasComponent);
    return VentasComponent;
}());



/***/ }),

/***/ "./src/app/components/ver-totales/ver-totales.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ver-totales/ver-totales.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-danger float-right\" [routerLink]=\"['/salidaDinero']\">\n  Nuevo movimiento - Salida\n  </button>\n<button type=\"button\" class=\"btn btn-outline-success float-right\" [routerLink]=\"['/nuevoMovimiento']\">\n    Nuevo movimiento - Entrada dinero\n  </button>\n<button type=\"button\" class=\"btn btn-outline-info float-right\" [routerLink]=\"['/ventaNueva']\">\n    Nueva venta\n  </button>\n<h4>Movimientos entrada de dinero</h4>\n\n<hr>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Nota</th>\n                        <th>Tipo de movimiento</th>\n                        <th (click)=\"orderByMovEntrada()\"> <u>Fecha</u> </th>\n                        <th>Monto</th>\n                        <th>Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of movimientos_entrada; let i = index ;\">\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.notas }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ showDatos(k.esAFavor) }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">${{ k.montoTotal }}</td>\n                        <td *ngIf=\"estaEntreLimites(i)\">\n                            <button (click)=\"deleteMovimiento_entrada(k._id, i)\" type=\"button\" class=\"btn btn-outline-danger\">\n                            Eliminar\n                          </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina()\">\n                Atras\n            </button>\n            <div class=\"float-right\">\n                <button type=\"button\" id=\"siguiente\" class=\"btn btn-success\" (click)=\"cambiarPagina()\">\n                Siguiente\n                </button>\n            </div>\n            <div *ngIf=\"(movimientos_entrada).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<h4>Movimientos salida de dinero</h4>\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n\n        <div class=\"table-responsive\">\n\n            <table class=\"table\">\n                <thead class=\"thead-inverse\">\n                    <tr>\n                        <th>#</th>\n                        <th>Nota</th>\n                        <th (click)=\"orderByMovSalida()\"> <u>Fecha</u> </th>\n                        <th>Monto</th>\n                        <th>Opciones</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let k of movimientos_salida; let i = index ;\">\n                        <td *ngIf=\"estaEntreLimites2(i)\">{{ i + 1 }}</td>\n                        <td *ngIf=\"estaEntreLimites2(i)\">{{ k.notas }}</td>\n                        <td *ngIf=\"estaEntreLimites2(i)\">{{ k.fechaActualizacion }}</td>\n                        <td *ngIf=\"estaEntreLimites2(i)\">${{ k.montoTotal }}</td>\n                        <td *ngIf=\"estaEntreLimites2(i)\">\n                            <button (click)=\"deleteMovimiento_salida(k._id, i)\" type=\"button\" class=\"btn btn-outline-danger\">\n                                  Eliminar\n                                </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"retrocederPagina2()\">\n                Atras\n            </button>\n            <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiarPagina2()\">\n                Siguiente\n                </button>\n            </div>\n            <div *ngIf=\"(movimientos_salida).length === 0 && !loading\" class=\"alert alert-info\" role=\"alert\">\n                <strong>No hay</strong> registros que mostrar\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n\n<h1 class=\"text-right\">Egresos : <strong>${{deuda}}</strong></h1>\n<hr>\n\n<h1 class=\"text-right\">Ingresos : <strong>${{aFavor}}</strong></h1>\n<hr>\n\n<h1 class=\"text-right\">Total neto en caja : <strong>${{neto}}</strong></h1>\n<hr>\n\n<br>"

/***/ }),

/***/ "./src/app/components/ver-totales/ver-totales.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ver-totales/ver-totales.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerTotalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerTotalesComponent", function() { return VerTotalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movimientos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movimientos.service */ "./src/app/services/movimientos.service.ts");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ventas.service */ "./src/app/services/ventas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerTotalesComponent = /** @class */ (function () {
    function VerTotalesComponent(_movService, _ventasService) {
        var _this = this;
        this._movService = _movService;
        this._ventasService = _ventasService;
        this.movimientos = [];
        this.loading = true;
        this.deuda = 0;
        this.aFavor = 0;
        this.neto = 0;
        this.totalVendido = 0;
        this.ventas = [];
        this.movimientos_entrada = [];
        this.movimientos_salida = [];
        this.limiteInferior = -1;
        this.limiteSuperior = 10;
        this.limiteInferior2 = -1;
        this.limiteSuperior2 = 10;
        this._movService.getmovimientos().subscribe(function (result) { return _this.movimientos = result; }, function (err) { return console.log("ERROR", err); }, function () {
            console.log("Finalizo la carga");
            _this.loading = false;
            for (var index = 0; index < _this.movimientos.length; index++) {
                if (_this.movimientos[index].esAFavor) {
                    _this.movimientos_entrada.push(_this.movimientos[index]);
                }
            }
            for (var index = 0; index < _this.movimientos.length; index++) {
                if (_this.movimientos[index].salidaDinero) {
                    _this.movimientos_salida.push(_this.movimientos[index]);
                }
            }
            _this._ventasService.getventas().subscribe(function (ventas) { return _this.ventas = ventas; }, function (err) { return console.log("ERROR", err); }, function () {
                console.log("LISTO");
                _this.calcularMontos();
            });
        });
    }
    VerTotalesComponent.prototype.ngOnInit = function () {
    };
    VerTotalesComponent.prototype.showDatos = function (esAFavor) {
        if (esAFavor) {
            return "PAGO";
        }
        else {
            return "DEUDA";
        }
    };
    VerTotalesComponent.prototype.deleteMovimiento_entrada = function (_id, i) {
        var _this = this;
        if (confirm("Esta seguro que desea eliminar el movimiento : " + _id)) {
            this._movService.deletemovimiento(_id)
                .subscribe(function (data) {
                console.log(data);
                _this.movimientos_entrada.splice(i, 1);
            }, function (error) { return console.log(error); }, function () {
                console.log("ELIMINADO");
                _this.calcularMontos();
            });
        }
    };
    VerTotalesComponent.prototype.deleteMovimiento_salida = function (_id, i) {
        var _this = this;
        if (confirm("Esta seguro que desea eliminar el movimiento : " + _id)) {
            this._movService.deletemovimiento(_id)
                .subscribe(function (data) {
                console.log(data);
                _this.movimientos_salida.splice(i, 1);
            }, function (error) { return console.log(error); }, function () {
                console.log("ELIMINADO");
                _this.calcularMontos();
            });
        }
    };
    VerTotalesComponent.prototype.calcularMontos = function () {
        this.deuda = 0;
        this.neto = 0;
        this.aFavor = 0;
        for (var index = 0; index < this.movimientos_entrada.length; index++) {
            this.aFavor += this.movimientos_entrada[index].montoTotal;
        }
        for (var index = 0; index < this.movimientos_salida.length; index++) {
            this.deuda += this.movimientos_salida[index].montoTotal;
        }
        for (var index = 0; index < this.ventas.length; index++) {
            this.totalVendido += this.ventas[index].montoTotal;
        }
        this.neto = this.aFavor - this.deuda;
    };
    VerTotalesComponent.prototype.cambiarPagina = function () {
        this.limiteSuperior += 10;
        this.limiteInferior += 10;
    };
    VerTotalesComponent.prototype.retrocederPagina = function () {
        this.limiteSuperior -= 10;
        this.limiteInferior -= 10;
    };
    VerTotalesComponent.prototype.cambiarPagina2 = function () {
        this.limiteSuperior2 += 10;
        this.limiteInferior2 += 10;
    };
    VerTotalesComponent.prototype.retrocederPagina2 = function () {
        this.limiteSuperior2 -= 10;
        this.limiteInferior2 -= 10;
    };
    VerTotalesComponent.prototype.estaEntreLimites = function (indiceActual) {
        if (this.limiteSuperior > indiceActual && this.limiteInferior < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    VerTotalesComponent.prototype.estaEntreLimites2 = function (indiceActual) {
        if (this.limiteSuperior2 > indiceActual && this.limiteInferior2 < indiceActual) {
            return true;
        }
        else {
            return false;
        }
    };
    VerTotalesComponent.prototype.orderByMovSalida = function () {
        this.movimientos_salida.reverse();
    };
    VerTotalesComponent.prototype.orderByMovEntrada = function () {
        this.movimientos_entrada.reverse();
    };
    VerTotalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-totales',
            template: __webpack_require__(/*! ./ver-totales.component.html */ "./src/app/components/ver-totales/ver-totales.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_movimientos_service__WEBPACK_IMPORTED_MODULE_1__["MovimientosService"],
            _services_ventas_service__WEBPACK_IMPORTED_MODULE_2__["VentasService"]])
    ], VerTotalesComponent);
    return VerTotalesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/apellido-cliente.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/apellido-cliente.pipe.ts ***!
  \************************************************/
/*! exports provided: ApellidoClientePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApellidoClientePipe", function() { return ApellidoClientePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApellidoClientePipe = /** @class */ (function () {
    function ApellidoClientePipe() {
    }
    ApellidoClientePipe.prototype.transform = function (value, args) {
        return null;
    };
    ApellidoClientePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'apellidoCliente'
        })
    ], ApellidoClientePipe);
    return ApellidoClientePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter-articulo.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/filter-articulo.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterArticuloPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArticuloPipe", function() { return FilterArticuloPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterArticuloPipe = /** @class */ (function () {
    function FilterArticuloPipe() {
    }
    FilterArticuloPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.titulo.toLowerCase().includes(searchText);
        });
    };
    FilterArticuloPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterArticulo'
        })
    ], FilterArticuloPipe);
    return FilterArticuloPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter-nombre.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-nombre.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterNombrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNombrePipe", function() { return FilterNombrePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNombrePipe = /** @class */ (function () {
    function FilterNombrePipe() {
    }
    FilterNombrePipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.apellido.toLowerCase().includes(searchText);
        });
    };
    FilterNombrePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterNombre'
        })
    ], FilterNombrePipe);
    return FilterNombrePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.titulo.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys',
            pure: false
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/nombre-cliente.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/nombre-cliente.pipe.ts ***!
  \**********************************************/
/*! exports provided: NombreClientePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NombreClientePipe", function() { return NombreClientePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NombreClientePipe = /** @class */ (function () {
    function NombreClientePipe() {
    }
    NombreClientePipe.prototype.transform = function (idCliente) {
        var _clientesService;
        _clientesService.getCliente(idCliente).subscribe(function (result) {
            return result.nombre;
        });
    };
    NombreClientePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'nombreCliente'
        })
    ], NombreClientePipe);
    return NombreClientePipe;
}());



/***/ }),

/***/ "./src/app/services/articulos-mongo.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/articulos-mongo.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticulosMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticulosMongoService", function() { return ArticulosMongoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticulosMongoService = /** @class */ (function () {
    function ArticulosMongoService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    ArticulosMongoService.prototype.getarticulo = function (id) {
        return this.http.get(this.domain + "/api/articulos/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ArticulosMongoService.prototype.getarticulos = function () {
        return this.http.get(this.domain + "/api/articulos")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ArticulosMongoService.prototype.addarticulo = function (newTask) {
        return this.http.post(this.domain + "/api/articulos", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ArticulosMongoService.prototype.updatearticulo = function (newTask) {
        return this.http.put(this.domain + "/api/articulos/" + newTask._id, newTask)
            .map(function (res) { return res; });
    };
    ArticulosMongoService.prototype.deletearticulo = function (id) {
        console.log("Servicio ", id);
        return this.http.delete(this.domain + "/api/articulos/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ArticulosMongoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticulosMongoService);
    return ArticulosMongoService;
}());



/***/ }),

/***/ "./src/app/services/clientes-mongo.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/clientes-mongo.service.ts ***!
  \****************************************************/
/*! exports provided: ClientesMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesMongoService", function() { return ClientesMongoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesMongoService = /** @class */ (function () {
    function ClientesMongoService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    ClientesMongoService.prototype.getCliente = function (id) {
        return this.http.get(this.domain + "/api/clientes/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ClientesMongoService.prototype.getClientes = function () {
        return this.http.get(this.domain + "/api/clientes")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ClientesMongoService.prototype.addCliente = function (newTask) {
        return this.http.post(this.domain + "/api/clientes", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ClientesMongoService.prototype.updateCliente = function (newTask) {
        return this.http.put(this.domain + "/api/clientes/" + newTask._id, newTask)
            .map(function (res) { return res; });
    };
    ClientesMongoService.prototype.deleteCliente = function (id) {
        console.log("Servicio ", id);
        return this.http.delete(this.domain + "/api/clientes/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ClientesMongoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientesMongoService);
    return ClientesMongoService;
}());



/***/ }),

/***/ "./src/app/services/heroes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/heroes.service.ts ***!
  \********************************************/
/*! exports provided: HeroesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesService", function() { return HeroesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesService = /** @class */ (function () {
    function HeroesService(afs) {
        this.afs = afs;
        this.articulos = [];
        this.usuario = {};
        this.keysA = [];
        this.aticulas = [];
    }
    HeroesService.prototype.login = function (proveedor) {
        /* if( proveedor === 'google' ){
           this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
         }else{
           this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
         }*/
    };
    HeroesService.prototype.logout = function () {
        /* this.usuario = {};
         this.afAuth.auth.signOut();
         */
    };
    HeroesService.prototype.cargarArticulos = function () {
        var _this = this;
        this.aticulas = [];
        this.itemsCollection = this.afs.collection('articulos', function (ref) { return ref.orderBy('fechaActualizacion', 'desc'); });
        this.afs.collection("articulos").ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                _this.aticulas.push(doc.data());
                _this.aticulas[_this.aticulas.length - 1].key$ = doc.id;
            });
        });
        return this.aticulas;
    };
    HeroesService.prototype.getArticulo = function (id) {
        return this.aticulas[id];
    };
    HeroesService.prototype.nuevoArticulo = function (art) {
        this.itemsCollection = this.afs.collection('articulos');
        art.fechaActualizacion = new Date().getTime();
        var keyTemporal;
        this.itemsCollection.add(art).then(function (resp) {
            console.log(art);
        });
        return this.aticulas.length - 1;
    };
    HeroesService.prototype.eliminarArticulo = function (id) {
        console.log(this.aticulas);
        for (var index = 0; index < this.aticulas.length; index++) {
            if (this.aticulas[index].key$ == id) {
                this.aticulas.splice(index, 1);
            }
        }
        //this.aticulas.splice(id,1);
        this.afs.collection('articulos').doc(id).ref.delete();
    };
    HeroesService.prototype.actualizarArticulo = function (id, artUpd) {
        this.afs.collection('articulos').doc(id).update({
            "titulo": artUpd.titulo,
            "precio": artUpd.precio,
            "marca": artUpd.marca,
            "cantidad": artUpd.cantidad,
            "fechaActualizacion": new Date().getTime(),
            "descripcion": artUpd.descripcion
        })
            .then(function (resp) {
            console.log("Document uploaded sucesfulli");
        })
            .catch(function () {
            return false;
        });
    };
    HeroesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "./src/app/services/movimientos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/movimientos.service.ts ***!
  \*************************************************/
/*! exports provided: MovimientosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosService", function() { return MovimientosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovimientosService = /** @class */ (function () {
    function MovimientosService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    MovimientosService.prototype.getmovimiento = function (id) {
        return this.http.get(this.domain + "/api/movimientos/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    MovimientosService.prototype.getmovimientos = function () {
        return this.http.get(this.domain + "/api/movimientos")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    MovimientosService.prototype.addmovimiento = function (newTask) {
        return this.http.post(this.domain + "/api/movimientos", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    MovimientosService.prototype.updatemovimiento = function (newTask) {
        return this.http.put(this.domain + "/api/movimientos/" + newTask._id, newTask)
            .map(function (res) { return res; });
    };
    MovimientosService.prototype.deletemovimiento = function (id) {
        console.log("Servicio ", id);
        return this.http.delete(this.domain + "/api/movimientos/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    MovimientosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovimientosService);
    return MovimientosService;
}());



/***/ }),

/***/ "./src/app/services/ventas.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ventas.service.ts ***!
  \********************************************/
/*! exports provided: VentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasService", function() { return VentasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VentasService = /** @class */ (function () {
    function VentasService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    VentasService.prototype.getventa = function (id) {
        return this.http.get(this.domain + "/api/ventas/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    VentasService.prototype.getventas = function () {
        return this.http.get(this.domain + "/api/ventas")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    VentasService.prototype.addventa = function (newTask) {
        return this.http.post(this.domain + "/api/ventas", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    VentasService.prototype.updateventa = function (newTask) {
        return this.http.put(this.domain + "/api/ventas/" + newTask._id, newTask)
            .map(function (res) { return res; });
    };
    VentasService.prototype.deleteventa = function (id) {
        console.log("Servicio ", id);
        return this.http.delete(this.domain + "/api/ventas/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    VentasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VentasService);
    return VentasService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBm4VFFbpUhLdsUQsJ9vj5nA2BTItKUgGE",
        authDomain: "firechat-cc4cc.firebaseapp.com",
        databaseURL: "https://firechat-cc4cc.firebaseio.com",
        projectId: "firechat-cc4cc",
        storageBucket: "firechat-cc4cc.appspot.com",
        messagingSenderId: "182930280185"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\TallerDero\BackEnd\src\Taller\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map