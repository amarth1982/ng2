import {bind} from 'angular2/angular2'
import {Route, AuxRoute, AsyncRoute} from 'angular2/router'

export let APP_ROUTE_BINDING = [
  bind('appRoutes')
    .toValue([
        new AsyncRoute({
            path: '/plant',
            loader: () => System.import('plant')
                                .then((m)=>m.Plant,
                                      (err)=>console.log(err)),
            as: 'plant'
          })
    ])
]
