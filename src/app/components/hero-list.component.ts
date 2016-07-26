import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';
import {HeroDetailComponent} from './hero-detail.component';

import '../html/hero-list.component.html';
import '../css/hero-list.component.css';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'app/html/hero-list.component.html',
    styleUrls: ['app/css/hero-list.component.css'],
    directives: [
        HeroDetailComponent
    ]
})

export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    adding: boolean;
    
    constructor(private router: Router, private heroService: HeroService){
    }
    
    ngOnInit(){
        console.log("ngOnInit");
        this.getHeroes();
    }
    
    private getHeroes() {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes
        )
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.adding = false;
    }
    
    gotoDetail(){
        this.router.navigate(['/hero-detail', this.selectedHero.id]);
    }
    
    delete(hero: Hero, event: any) {
        event.stopPropagation();
        console.log("delete hero = {" + hero.id + ", " + hero.name + "}");
        this.heroService.delete(hero).then(
            res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            }
        );
    }
    
    addHero() {
        console.log("addHero");
        this.selectedHero = null;
        this.adding = true;
    }
    
    close(hero: Hero) {
        console.log("[list] close = " + hero);
        this.adding = false;
        if(hero) {
            this.getHeroes();
        }
    }
};