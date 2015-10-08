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
var model_form_1 = require('./components/model-form/model-form');
var assembly_line_1 = require('./components/assembly-line/assembly-line');
let Plant = class {
    constructor(_childRouter) {
        this._childRouter = _childRouter;
        if (!Plant._isRouteConfigured) {
            this._childRouter.config([
                { path: '/models', component: model_form_1.ModelForm, as: 'models' },
                { path: '/assembly-line', component: assembly_line_1.AssemblyLine, as: 'assembly-line' }
            ]);
            Plant._isRouteConfigured = true;
        }
    }
};
Plant._isRouteConfigured = false;
Plant = __decorate([
    angular2_1.Component({
        selector: 'plant'
    }),
    angular2_1.View({
        encapsulation: angular2_1.ViewEncapsulation.None,
        directives: [router_1.RouterOutlet, router_1.RouterLink],
        templateUrl: '/plant/template.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], Plant);
exports.Plant = Plant;
