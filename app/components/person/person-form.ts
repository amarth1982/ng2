import {Component, View, Inject, ViewEncapsulation} from 'angular2/angular2'
import {FORM_BINDINGS, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/forms'

import {TrimmedInput} from '../trimmed-input';

@Component({
  bindings: [FORM_BINDINGS],
  selector: 'person-form'
})
@View({
  //define shadow dom
  //emulated view encapsulation manages styles by using random id name as css selector
  encapsulation: ViewEncapsulation.Native, //Native, None
  directives: [FORM_DIRECTIVES, TrimmedInput],
  styles:[
    //Enable if View Encapsulation is native
    `@import url('/css/bootstrap.min.css')`,
    `
      .person{
        max-width: 600px;
      }
    `
  ],
  // using #personForm for form variable will fail as the name is same as Selector/Class, need to find out
  // (update: looks like a parser issue, #personform works, could be angular's way of hypen-ating the pascal case that collides with selector here)
  // #myform="form" we assing the directive form to myform, so to validate we will use myform.form.valid instead in button disabled
  template: `
    <div class="person">
      <form role="form" #personform (submit)='onSubmit()'  [ng-form-model]="formControls">
        <div class="well well-xs" ng-control-group="name">
          <h3>Name</h3>
          <div class="form-group">
            <label>First:</label>
            <input type="text" ng-control="fname" class="form-control" trimmed>
          </div>
          <div class="form-group">
            <label>Middle: </label>
            <input type="text" ng-control="mname" class="form-control" trimmed>
          </div>
          <div class="form-group">
            <label>Last: </label>
            <input type="text" ng-control="lname" class="form-control" trimmed>
          </div>
        </div>

        <div class="well well-xs" ng-control-group="address">
          <h3>Address</h3>
          <div class="form-group">
            <label>Line 1:</label>
            <input type="text" ng-control="line1" class="form-control" trimmed>
          </div><div class="form-group">
            <label>Line 2:</label>
            <input type="text" ng-control="line2" class="form-control" trimmed>
          </div>
          <div class="form-group">
            <label>State:</label>
            <select class="form-control"></select>
          </div>
          <div class="form-group">
            <label>Zip Code:</label>
            <input type="text" ng-control="zipcode" class="form-control" trimmed>
          </div>
        </div>

        <button [disabled]="!personform.valid">Submit</button>
      </form>
    </div>
  `
})
export class PersonForm{
  public fb: FormBuilder;
  public formControls: ControlGroup;

  constructor(){
    this.fb = new FormBuilder();


      let nameControlGroups = this.fb.group( {
        "fname": ['', Validators.required],
        "mname": [''],
        "lname": ['', Validators.required]
      })

      let addressControlGroups = this.fb.group( {
        "line1": ['', Validators.required],
        "line2": [''],
        "zipcode": ['', this.zipCodeValidator]
      })

      this.formControls = this.fb.group({
        'name': nameControlGroups,
        'address': addressControlGroups
      });
  }

  onInit(){
  }

  private zipCodeValidator = ()=>{
    return false
  }
}
