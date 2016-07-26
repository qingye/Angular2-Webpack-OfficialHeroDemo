import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroService} from '../service/hero.service';

@Component({
    selector: 'app-tag',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['dashboard']" routerLinkActive="active">Dashboard</a>
        <a [routerLink]="['herolist']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Angular2.0';
}