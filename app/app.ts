//Include Components View bootstrap from angular2
import {Component, View, bootstrap, bind, Inject} from 'angular2/angular2';
import {APP_SERVICE_BINDING} from 'services'
import {PetrolEngine} from 'services/engine'


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

import {Home} from './components/home/home'

//We pass in an array of RouteDefinitions to the Route Config
//RouteDefinition is an interface and Route Implements the RouteDefinition
//Other type of route include AuxRoute, AsyncRoute & Redirect
//(Async and Redirect are used to route async loaded components)
//@RouteConfig(appRoutes)
@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  //Note: even though router-outlet looks like a component(custom-element) its not
  // Its a directive

  //Route-link takes in an array of Routes
  //Each route could be followed by route parameters
  //like: <a [route-link]="['/person', {personId: 1}]">Person 1</a>
  //Its a must to prepend the route params
  template: `
    <div>
      <!-- Aux routes are defined routes
      <router-outlet name='nav'></router-outlet>
      -->

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
      <router-outlet></router-outlet>
    </div>
  `
})
class App{
  public appTitle: string

  constructor(public router: Router,
    @Inject('routes') private routes : Array<Route>,
    private engine : PetrolEngine){

    this.router.config(routes)

    console.log('app->petrol engine', this.engine)
    console.log('adding default 6 cylinders to petrol engine')
    this.engine.cylinders = 6
    console.log('app->petrol engine', this.engine)

    this.appTitle = 'falseWagen'

    console.log(router)

    this.router.navigate('/home')
  }
}

bootstrap(App, [
    bind('allowedCo2Level').toValue(10),
    APP_SERVICE_BINDING,
    ROUTER_BINDINGS,
    //Requires to be assigned, else throwing "Error during instantiation of Location"
    //How ever document from LocationStrategy suggest the default is HashLocationStragergy
    bind(LocationStrategy).toClass(HashLocationStrategy),
    bind('routes').toFactory( function(@Inject('appRoutes') appRoutes){
      let routes = [new Route({
        path: '/home',
        component: Home,
        as: 'home'
      })].concat(appRoutes)

      return routes
    }, ['appRoutes'])
  ])
  .then(
    success => console.log('app launched successfully'),
    error => console.log('something happened : ', error)
  )
