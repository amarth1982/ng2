import {Component, View} from 'angular2/angular2'
import {ROUTER_BINDINGS, Router, RouterLink} from 'angular2/router'

@Component({
  selector: 'nav-bar'
})
@View({
  directives: [RouterLink],
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid  bg-warning">
        <div class="navbar-header">
          <a class="bg-success navbar-brand" [router-link]="['/home']">
            <span class="text-success glyphicon glyphicon-euro">
              {{appTitle}}
            </span>
          </a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li>
              <a [router-link]="['/plant']">Plant</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
})
export class NavBar{
   public appTitle: string

   constructor(public router: Router){
     this.appTitle = 'falseWagen'

     console.log(router)
   }
}
