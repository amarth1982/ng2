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
import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { FORM_BINDINGS, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/forms';
import { TrimmedInput } from '../../trimmed-input';
export let ModelForm = class {
    constructor() {
        this.years = ModelForm._years;
        this.engines = ModelForm._engines;
        this.zipCodeValidator = () => {
            return false;
        };
        this.fb = new FormBuilder();
        let modelControlGroups = this.fb.group({
            "name": ['', Validators.required],
            "year": ['2015']
        });
        let engineControlGroups = this.fb.group({
            "type": ['v4'],
            "turbo": [''],
            "biturbo": [''],
            "cheat": ['']
        });
        this.formControls = this.fb.group({
            'model': modelControlGroups,
            'engine': engineControlGroups
        });
    }
    onInit() {
    }
};
ModelForm._years = [
    '2015'
];
ModelForm._engines = [
    'v4',
    'v6',
    'v8',
    'v12',
    'Diesel'
];
ModelForm = __decorate([
    Component({
        bindings: [FORM_BINDINGS],
        selector: 'model-form'
    }),
    View({
        directives: [FORM_DIRECTIVES, NgFor, NgIf, TrimmedInput],
        styles: [
            `@import url('/css/bootstrap.min.css')`,
            `
      .model-form{
        max-width: 600px;
      }
    `
        ],
        templateUrl: '/app/components/plant/components/model-form-template.html'
    }), 
    __metadata('design:paramtypes', [])
], ModelForm);
