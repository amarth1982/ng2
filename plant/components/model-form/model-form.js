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
var forms_1 = require('angular2/forms');
var engine_1 = require('services/engine');
let ModelForm = class {
    constructor(injector) {
        this.injector = injector;
        this.years = ModelForm._years;
        this.engines = ModelForm._engines;
        this.zipCodeValidator = () => {
            return false;
        };
        this.fb = new forms_1.FormBuilder();
        this._PetrolEngine = injector.get(engine_1.PetrolEngine);
        console.log('model-form->petrol engine', this._PetrolEngine);
        let petrolEngineResolvedBinding = angular2_1.Injector.resolve([engine_1.PetrolEngine]);
        console.log('model-form->new petrol engine', injector.resolveAndInstantiate(petrolEngineResolvedBinding));
        let modelControlGroups = this.fb.group({
            "name": ['', forms_1.Validators.required],
            "year": ['2015']
        });
        let engineControlGroups = this.fb.group({
            "type": ['Petrol'],
            "turbocharger": [''],
            "cylinders": [''],
            "cheat": ['']
        });
        this.formControls = this.fb.group({
            'model': modelControlGroups,
            'engine': engineControlGroups
        });
    }
    onInit() {
    }
    OnSubmit() {
    }
};
ModelForm._years = [
    '2015'
];
ModelForm._engines = [
    'Petrol',
    'Diesel'
];
ModelForm = __decorate([
    angular2_1.Component({
        bindings: [forms_1.FORM_BINDINGS],
        selector: 'model-form'
    }),
    angular2_1.View({
        directives: [forms_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf],
        styles: [
            `@import url('/css/bootstrap.min.css')`,
            `
      .model-form{
        max-width: 600px;
      }
    `
        ],
        templateUrl: '/plant/components/model-form/model-form-template.html'
    }), 
    __metadata('design:paramtypes', [angular2_1.Injector])
], ModelForm);
exports.ModelForm = ModelForm;
