import {Component, View, ViewEncapsulation} from 'angular2/angular2'
import {ModelForm} from './components/model-form'


@Component({
  selector: 'plant'
})
@View({
  //define shadow dom
  //emulated view encapsulation manages styles by using random id name as css selector
  encapsulation: ViewEncapsulation.Native, //Native, None
  directives: [ModelForm],
  templateUrl: '/app/components/plant/template.html'
})
export class Plant{

}
