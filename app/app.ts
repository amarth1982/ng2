//Include Components View bootstrap from angular2
import {Component, View, bootstrap, bind} from 'angular2/angular2'

import {
  ROUTER_BINDINGS,
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
  Router,
  RouterLink,
  RouteConfig,
  RouterOutlet,
  Route} from 'angular2/router'

import {APP_DIRECTIVES} from './directives/directives'
import {APP_COMPONENTS} from './components/components'

import {Home} from './components/home/home'
import {PersonForm} from './components/person/person-form'

//We pass in an array of RouteDefinitions to the Route Config
//RouteDefinition is an interface and Route Implements the RouteDefinition
//Other type of route include AuxRoute, AsyncRoute & Redirect
//(Async and Redirect are used to route async loaded components)
@RouteConfig([
  new Route({
    path: '/', as : 'home', component: Home
  }),
  {
    path: '/person', as: 'person', component: PersonForm
  }
])
@Component({
  selector: 'app'
})
@View({
  directives: [APP_DIRECTIVES, APP_COMPONENTS, RouterOutlet, RouterLink],
  //Note: even though router-outlet looks like a component its not
  // Its a directive
  template: `
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" [router-link]="['/home']">
              {{appTitle}}
            </a>
          </div>
          <div>
            <ul class="nav navbar-nav">
              <li>
                <a [router-link]="['/person']">Person</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
class App{
  public appTitle: string

  constructor(){
    this.appTitle = 'Angular2'
  }
}

bootstrap(App, [
    ROUTER_BINDINGS,
    //Requires to be assigned, else throwing "Error during instantiation of Location"
    //How ever document from LocationStrategy suggest the default is HashLocationStragergy
    bind(LocationStrategy).toClass(HashLocationStrategy)
  ])
  .then(
    success => console.log('app launched successfully'),
    error => console.log('something happened : ', error)
  )
