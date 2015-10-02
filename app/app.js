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
import { ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, RouterLink, RouteConfig, RouterOutlet, Route } from 'angular2/router';
import { APP_DIRECTIVES } from './directives/directives';
import { APP_COMPONENTS } from './components/components';
import { Home } from './components/home/home';
import { Plant } from './components/plant/plant';
let App = class {
    constructor() {
        this.appTitle = 'falseWagen';
    }
};
App = __decorate([
    RouteConfig([
        new Route({
            path: '/', as: 'home', component: Home
        }),
        {
            path: '/plant', as: 'plant', component: Plant
        }
    ]),
    Component({
        selector: 'app'
    }),
    View({
        directives: [APP_DIRECTIVES, APP_COMPONENTS, RouterOutlet, RouterLink],
        template: `
    <div>
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
    __metadata('design:paramtypes', [])
], App);
bootstrap(App, [
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
])
    .then(success => console.log('app launched successfully'), error => console.log('something happened : ', error));
