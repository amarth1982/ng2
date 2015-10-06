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

 private _componentLifecycleHandler =
  (lifecycleEvent:string): { (next: ComponentInstruction, prev: ComponentInstruction) } => {
     return (next, prev) => {
       console.log(lifecycleEvent)
      //  for CanReuse
       return true;
     }
  }

  constructor(private _router: Router){
    console.log('Home Component')
  }

 public OnVisitOurPlantClicked = ($event) => {
    console.log('navigating...')
    this._router.navigate('/plant')
  }

  public onActivate = this._componentLifecycleHandler('on-activate')
  public onReuse = this._componentLifecycleHandler('on-reuse')
  public onDeactivate = this._componentLifecycleHandler('on-deactivate')
  public canReuse = this._componentLifecycleHandler('can reuse home')
}
