
import {Component, View, ViewEncapsulation, Injector} from 'angular2/angular2'
import {Router, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router'
import {ModelForm} from './components/model-form/model-form'
import {AssemblyLine} from './components/assembly-line/assembly-line'

//Yet to find out how to add route config to the child router
//hence injecting the child router through constructor
/*@RouteConfig([
  { path: '/models', component: ModelForm, as: '/models'},
  //{ path: '/'}
])*/
@Component({
  selector: 'plant'
})
@View({
  //define shadow dom
  //emulated view encapsulation manages styles by using random id name as css selector
  encapsulation: ViewEncapsulation.None, //Native, None
  directives: [RouterOutlet, RouterLink],
  templateUrl: '/plant/template.html'
})
export class Plant{
    private static _isRouteConfigured = false;
    constructor(private _childRouter : Router){
      if(!Plant._isRouteConfigured)
      {
          this._childRouter.config([
          { path: '/models', component: ModelForm, as: 'models'},
          { path: '/assembly-line', component: AssemblyLine, as: 'assembly-line'}
        ])

        Plant._isRouteConfigured = true;
      }
    }
}
