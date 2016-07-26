import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';

import '../html/dashboard.component.html';
import '../css/dashboard.component.css';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    
    title = "Top 4-Hero";
    heroes: Hero[];
    
    constructor(private router: Router, private heroService: HeroService){
    }
    
    ngOnInit(){
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(1, 5)
        );
    }
    
    gotoDetail(hero: Hero){
        this.router.navigate(['/hero-detail', hero.id]);
    }
}