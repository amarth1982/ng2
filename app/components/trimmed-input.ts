import {Component, View} from 'angular2/angular2'

/*
A component being written as a directive in Angular2
*/

@Component({
  selector: '[trimmed]',
  host:{
    '(input)' : 'onChange($event.target.value)',
    '[value]' :'value'
  },
})
@View({
  template: ``
})
export class TrimmedInput {
  value: string;
  constructor(){
    this.value = ''
  }
  onChange(updatedValue: string) {
    this.value = (updatedValue || '').trim();

    console.log(this.value)
  }
}
