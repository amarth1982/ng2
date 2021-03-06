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
export let TrimmedInput = class {
    constructor() {
        this.value = '';
    }
    onChange(updatedValue) {
        this.value = (updatedValue || '').trim();
    }
    onBlur(e) {
        e.target.value = this.value;
    }
};
TrimmedInput = __decorate([
    Component({
        selector: '[trimmed]',
        host: {
            '(input)': 'onChange($event.target.value)',
            '[value]': 'value',
            '(blur)': 'onBlur($event)'
        },
    }),
    View({
        template: ``
    }), 
    __metadata('design:paramtypes', [])
], TrimmedInput);
