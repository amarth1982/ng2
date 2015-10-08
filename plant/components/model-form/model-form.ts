import {Component, View, Injector, NgFor, NgIf} from 'angular2/angular2'
import {FORM_BINDINGS, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/forms'

import {PetrolEngine, testbinding} from 'services/engine'

@Component({
  bindings: [FORM_BINDINGS],
  selector: 'model-form'
})
@View({
  directives: [FORM_DIRECTIVES, NgFor, NgIf],
  styles:[
    //Enable if View Encapsulation is native
    `@import url('/css/bootstrap.min.css')`,
    `
      .model-form{
        max-width: 600px;
      }
    `
  ],
  templateUrl: '/plant/components/model-form/model-form-template.html'
})
export class ModelForm{
  public fb: FormBuilder;
  public formControls: ControlGroup;

  static _years: Array<string> = [
    '2015'
  ]
  static _engines: Array<string> = [
    'Petrol',
    'Diesel'
  ]

  public years = ModelForm._years
  public engines = ModelForm._engines

  private _PetrolEngine : {
      isTurboCharged : boolean
      cylinders : number
      EmissionTest(co2Level : number) : boolean
    }

  constructor(private injector : Injector){
    this.fb = new FormBuilder();

    //note this petrolengine has 6 cylinders, which was assigned
    //by the App component
    this._PetrolEngine = injector.get(PetrolEngine)
    console.log('model-form->petrol engine', this._PetrolEngine)

    let petrolEngineResolvedBinding = Injector.resolve([PetrolEngine])

    console.log('model-form->new petrol engine',
      injector.resolveAndInstantiate(petrolEngineResolvedBinding))

      let modelControlGroups = this.fb.group( {
        "name": ['', Validators.required],
        "year": ['2015']
      })

      let engineControlGroups = this.fb.group( {
        "type": ['Petrol']
        "turbocharger": [''],
        "cylinders": [''],
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

  OnSubmit(){

  }
}
