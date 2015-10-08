import {Component, View, Inject, ViewEncapsulation} from 'angular2/angular2'


//The following interfaces has the definition (nextInstruction, prevInstruction): any
import{
  Router,
  OnActivate,
  OnReuse,
  OnDeactivate,
  CanReuse,
  Instruction, //Instruction is the base for ComponentInstruction and PrimaryInstruction
  ComponentInstruction} from 'angular2/router'

@Component({
  selector: 'home'
})
@View({
  templateUrl: '/app/components/home/template.html'
})
export class Home  implements
                    OnActivate,
                    OnReuse,
                    OnDeactivate,
                    CanReuse{

 private _componentLifecycleHandler = function(lifecycleEvent){
   console.log(lifecycleEvent)
 }

  constructor(private _router: Router){
    console.log('Home Component')
  }

 public OnVisitOurPlantClicked = ($event) => {
    this._router.navigate('/plant')
  }

  //This will not work as Typescript will create it as a property to the Home
  //component instance
  //public onActivate = (next, prev) => {this._componentLifecycleHandler('on-activate')}
  //Instead it should be function implementation
  public onActivate(next, prev){this._componentLifecycleHandler('on-activate')}
  public onReuse(next, prev){this._componentLifecycleHandler('on-reuse')}
  public onDeactivate(next, prev){this._componentLifecycleHandler('on-deactivate')}
  public canReuse(next, prev):boolean{
    this._componentLifecycleHandler('can reuse home');
    return true
  }
}
