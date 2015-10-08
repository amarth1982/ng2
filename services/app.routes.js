var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
exports.APP_ROUTE_BINDING = [
    angular2_1.bind('appRoutes')
        .toValue([
        new router_1.AsyncRoute({
            path: '/plant',
            loader: () => System.import('plant')
                .then((m) => m.Plant, (err) => console.log(err)),
            as: 'plant'
        })
    ])
];
