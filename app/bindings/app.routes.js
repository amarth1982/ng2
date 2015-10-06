import { Route, AuxRoute } from 'angular2/router';
import { Home } from '../components/home/home';
import { Plant } from '../components/plant/plant';
import { NavBar } from '../components/navbar';
export default {
    routes: [
        new Route({
            path: '/',
            component: Home,
            as: 'home'
        }),
        new Route({
            path: '/plant',
            component: Plant,
            as: 'plant'
        }),
        new AuxRoute({
            path: '/navbar',
            component: NavBar,
            as: 'navbar'
        })
    ]
};
