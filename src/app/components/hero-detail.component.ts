import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service'

import '../html/hero-detail.component.html';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'app/html/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy{
    
    @Output()
    close = new EventEmitter();
    
    hero: Hero;
    sub: any;
    shouldNavigate = true;
    
    constructor(private router: Router, private heroService: HeroService){
    }
    
    ngOnInit(){
        const state = this.router.routerState;
        this.sub = state.firstChild(state.root).params.subscribe(
            params => {
                if (params['id'] != undefined) {
                    let id = +params['id'];
                    this.heroService.getHero(id).then(
                        hero => this.hero = hero
                    );
                    this.shouldNavigate = true;
                } else {
                    this.hero = new Hero();
                    this.shouldNavigate = false;
                }
            }
        )
    }
    
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    
    goBack(hero: Hero = null){
        if (!this.shouldNavigate) {
            this.close.emit(hero);
        } else {
            window.history.back(-1);
        }
    }
    
    save() {
        this.heroService.save(this.hero).then(
            hero => this.goBack(hero)
        ).catch(error => console.log("[detail/error = ]" + error));
    }
};