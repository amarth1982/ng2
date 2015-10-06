var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var directives_1 = require('./directives/directives');
var components_1 = require('./components/components');
var app_routes_1 = require('./bindings/app.routes');
let App = class {
    constructor(router) {
        this.router = router;
        this.appTitle = 'falseWagen';
        console.log(router);
    }
};
App = __decorate([
    router_1.RouteConfig(app_routes_1.default.routes),
    angular2_1.Component({
        selector: 'app'
    }),
    angular2_1.View({
        directives: [directives_1.APP_DIRECTIVES, components_1.APP_COMPONENTS, router_1.RouterOutlet, router_1.RouterLink],
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

      <div *ng-if="router.navigating" class=container-fluid>
        <span class="glyphicons glyphicons-refresh"><h1> </h1></span>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], App);
angular2_1.bootstrap(App, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
])
    .then(success => console.log('app launched successfully'), error => console.log('something happened : ', error));
