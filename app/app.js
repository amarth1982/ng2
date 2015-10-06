var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View, bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet } from 'angular2/router';
import { APP_DIRECTIVES } from './directives/directives';
import { APP_COMPONENTS } from './components/components';
import AppRoutes from './bindings/app.routes';
let App = class {
    constructor(router) {
        this.router = router;
        this._componentLifecycleHandler = (lifecycleEvent) => {
            return (next, prev) => {
                console.log(lifecycleEvent);
                return true;
            };
        };
        this.onActivate = this._componentLifecycleHandler('on-activate');
        this.onReuse = this._componentLifecycleHandler('on-reuse');
        this.onDeactivate = this._componentLifecycleHandler('on-deactivate');
        this.canReuse = this._componentLifecycleHandler('can reuse app');
        this.appTitle = 'falseWagen';
        console.log(router);
    }
};
App = __decorate([
    RouteConfig(AppRoutes.routes),
    Component({
        selector: 'app'
    }),
    View({
        directives: [APP_DIRECTIVES, APP_COMPONENTS, RouterOutlet, RouterLink],
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
    __metadata('design:paramtypes', [Router])
], App);
bootstrap(App, [
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
])
    .then(success => console.log('app launched successfully'), error => console.log('something happened : ', error));
