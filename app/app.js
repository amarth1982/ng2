var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var services_1 = require('services');
var engine_1 = require('services/engine');
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
let App = class {
    constructor(router, routes, engine) {
        this.router = router;
        this.routes = routes;
        this.engine = engine;
        this.router.config(routes);
        console.log('app->petrol engine', this.engine);
        console.log('adding default 6 cylinders to petrol engine');
        this.engine.cylinders = 6;
        console.log('app->petrol engine', this.engine);
        this.appTitle = 'falseWagen';
        console.log(router);
        this.router.navigate('/home');
    }
};
App = __decorate([
    angular2_1.Component({
        selector: 'app'
    }),
    angular2_1.View({
        directives: [router_1.RouterOutlet, router_1.RouterLink],
        template: `
    <div>
      <!-- Aux routes are defined routes
      <router-outlet name='nav'></router-outlet>
      -->

      <nav class="navbar navbar-default">
        <div class="container-fluid  bg-warning">
          <div class="navbar-header">
            <a class="bg-success navbar-brand" [router-link]="['/home']">
              <span class="text-success glyphicon glyphicon-euro">
                {{appTitle}}
              </span>
            </a>
          </div>
          <div>
            <ul class="nav navbar-nav">
              <li>
                <a [router-link]="['/plant']">Plant</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
    }),
    __param(1, angular2_1.Inject('routes')), 
    __metadata('design:paramtypes', [router_1.Router, Array, (typeof (_a = typeof engine_1.PetrolEngine !== 'undefined' && engine_1.PetrolEngine) === 'function' && _a) || Object])
], App);
angular2_1.bootstrap(App, [
    angular2_1.bind('allowedCo2Level').toValue(10),
    services_1.APP_SERVICE_BINDING,
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),
    angular2_1.bind('routes').toFactory(function (appRoutes) {
        let routes = [new router_1.Route({
                path: '/home',
                component: home_1.Home,
                as: 'home'
            })].concat(appRoutes);
        return routes;
    }, ['appRoutes'])
])
    .then(success => console.log('app launched successfully'), error => console.log('something happened : ', error));
var _a;
