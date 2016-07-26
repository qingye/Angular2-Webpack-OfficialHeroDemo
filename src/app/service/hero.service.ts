import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Hero} from '../model/hero';

@Injectable()
export class HeroService {
    
    private heroesUrl = "app/heroes";
    
    constructor(private http: Http){
    }
    
    getHeroes(){
        // return Promise.resolve(HEROES);
        console.log("[HttpService] => getHeroes")
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(
                            response => {
                                console.log("response = " + response);
                                return response.json().data as Hero[]
                            }
                        )
                        .catch(this.handleError);
    }
    
    getHero(id: number){
        return this.getHeroes().then(
            heroes => heroes.find(hero => hero.id === id)
        );
    }
    
    save(hero: Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }
    
    // delete the specified hero by hero.id
    delete(hero: Hero) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http.delete(url, {headers: headers})
                        .toPromise()
                        .catch(this.handleError);
    }

    // update the specified hero by hero.id
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: headers})
                        .toPromise()
                        .then(() => hero)
                        .catch(this.handleError);
    }
    
    // create a new hero
    private post(hero: Hero){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
    }
    
    private handleError(error: any){
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}