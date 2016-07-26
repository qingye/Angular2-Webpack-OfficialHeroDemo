import {provideRouter, RouterConfig} from '@angular/router';

import {DashboardComponent} from '../components/dashboard.component';
import {HeroListComponent} from '../components/hero-list.component';
import {HeroDetailComponent} from '../components/hero-detail.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'herolist',
        component: HeroListComponent
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetailComponent
    }
];

export const AppRouterProviders = [
    provideRouter(routes)
];