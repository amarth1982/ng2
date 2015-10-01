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
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var trimmed_input_1 = require('./trimmed-input');
var PersonForm = (function () {
    function PersonForm() {
        this.fb = new forms_1.FormBuilder();
        var nameControlGroups = this.fb.group({
            "fname": ['', forms_1.Validators.required],
            "mname": [''],
            "lname": ['', forms_1.Validators.required]
        });
        var addressControlGroups = this.fb.group({
            "line1": ['', forms_1.Validators.required],
            "line2": [''],
            "zipcode": ['', this.zipCodeValidator]
        });
        this.formControls = this.fb.group({
            'name': nameControlGroups,
            'address': addressControlGroups
        });
    }
    PersonForm.prototype.onInit = function () {
    };
    PersonForm = __decorate([
        angular2_1.Component({
            bindings: [forms_1.FORM_BINDINGS],
            selector: 'person-form'
        }),
        angular2_1.View({
            encapsulation: angular2_1.ViewEncapsulation.Native,
            directives: [forms_1.FORM_DIRECTIVES, trimmed_input_1.TrimmedInput],
            styles: [
                "@import url('/css/bootstrap.min.css')",
                "\n      .person{\n        max-width: 600px;\n      }\n    "
            ],
            template: "\n    <div class=\"person\">\n      <form role=\"form\" #personform (submit)='onSubmit()'  [ng-form-model]=\"formControls\">\n        <div class=\"well well-xs\" ng-control-group=\"name\">\n          <h3>Name</h3>\n          <div class=\"form-group\">\n            <label>First:</label>\n            <input type=\"text\" ng-control=\"fname\" class=\"form-control\" trimmed>\n          </div>\n          <div class=\"form-group\">\n            <label>Middle: </label>\n            <input type=\"text\" ng-control=\"mname\" class=\"form-control\" trimmed>\n          </div>\n          <div class=\"form-group\">\n            <label>Last: </label>\n            <input type=\"text\" ng-control=\"lname\" class=\"form-control\" trimmed>\n          </div>\n        </div>\n\n        <div class=\"well well-xs\" ng-control-group=\"address\">\n          <h3>Address</h3>\n          <div class=\"form-group\">\n            <label>Line 1:</label>\n            <input type=\"text\" ng-control=\"line1\" class=\"form-control\" trimmed>\n          </div><div class=\"form-group\">\n            <label>Line 2:</label>\n            <input type=\"text\" ng-control=\"line2\" class=\"form-control\" trimmed>\n          </div>\n          <div class=\"form-group\">\n            <label>State:</label>\n            <select class=\"form-control\"></select>\n          </div>\n          <div class=\"form-group\">\n            <label>Zip Code:</label>\n            <input type=\"text\" ng-control=\"zipcode\" class=\"form-control\" trimmed>\n          </div>\n        </div>\n\n        <button [disabled]=\"!personform.valid\">Submit</button>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PersonForm);
    return PersonForm;
})();
exports.PersonForm = PersonForm;
var zipCodeValidator = function () {
    return false;
};
