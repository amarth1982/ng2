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
import { Component, View } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
export let NavBar = class {
    constructor(router) {
        this.router = router;
        this.appTitle = 'falseWagen';
        console.log(router);
    }
};
NavBar = __decorate([
    Component({
        selector: 'nav-bar'
    }),
    View({
        directives: [RouterLink],
        template: `
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
    `
    }), 
    __metadata('design:paramtypes', [Router])
], NavBar);
