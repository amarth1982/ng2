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
import { Router } from 'angular2/router';
export let Home = class {
    constructor(_router) {
        this._router = _router;
        this._componentLifecycleHandler = (lifecycleEvent) => {
            return (next, prev) => {
                console.log(lifecycleEvent);
                return true;
            };
        };
        this.OnVisitOurPlantClicked = ($event) => {
            console.log('navigating...');
            this._router.navigate('/plant');
        };
        this.onActivate = this._componentLifecycleHandler('on-activate');
        this.onReuse = this._componentLifecycleHandler('on-reuse');
        this.onDeactivate = this._componentLifecycleHandler('on-deactivate');
        this.canReuse = this._componentLifecycleHandler('can reuse home');
        console.log('Home Component');
    }
};
Home = __decorate([
    Component({
        selector: 'home'
    }),
    View({
        templateUrl: '/app/components/home/template.html'
    }), 
    __metadata('design:paramtypes', [Router])
], Home);
