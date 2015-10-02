import {Component, View, Inject, NgFor, NgIf} from 'angular2/angular2'
import {FORM_BINDINGS, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/forms'

import {TrimmedInput} from '../../trimmed-input';

@Component({
  bindings: [FORM_BINDINGS],
  selector: 'model-form'
})
@View({
  directives: [FORM_DIRECTIVES, NgFor, NgIf, TrimmedInput],
  styles:[
    //Enable if View Encapsulation is native
    `@import url('/css/bootstrap.min.css')`,
    `
      .model-form{
        max-width: 600px;
      }
    `
  ],
  templateUrl: '/app/components/plant/components/model-form-template.html'
})
export class ModelForm{
  public fb: FormBuilder;
  public formControls: ControlGroup;

  static _years: Array<string> = [
    '2015'
  ]
  static _engines: Array<string> = [
    'v4',
    'v6',
    'v8',
    'v12',
    'Diesel'
  ]

  public years = ModelForm._years
  public engines = ModelForm._engines

  constructor(){
    this.fb = new FormBuilder();


      let modelControlGroups = this.fb.group( {
        "name": ['', Validators.required],
        "year": ['2015']
      })

      let engineControlGroups = this.fb.group( {
        "type": ['v4'],
        "turbo": [''],
        "biturbo": [''],
        "cheat": ['']
      })

      this.formControls = this.fb.group({
        'model': modelControlGroups,
        'engine': engineControlGroups
      });
  }

  onInit(){
  }

  private zipCodeValidator = ()=>{
    return false
  }
}
