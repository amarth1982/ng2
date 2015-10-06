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
let Home = class {
    constructor(_router) {
        this._router = _router;
        this._componentLifecycleHandler = function (lifecycleEvent) {
            console.log(lifecycleEvent);
        };
        this.OnVisitOurPlantClicked = ($event) => {
            this._router.navigate('/plant');
        };
        console.log('Home Component');
    }
    onActivate(next, prev) { this._componentLifecycleHandler('on-activate'); }
    onReuse(next, prev) { this._componentLifecycleHandler('on-reuse'); }
    onDeactivate(next, prev) { this._componentLifecycleHandler('on-deactivate'); }
    canReuse(next, prev) { this._componentLifecycleHandler('can reuse home'); }
};
Home = __decorate([
    angular2_1.Component({
        selector: 'home'
    }),
    angular2_1.View({
        templateUrl: '/app/components/home/template.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], Home);
exports.Home = Home;
