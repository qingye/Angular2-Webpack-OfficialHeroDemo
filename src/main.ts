/**
 * 非真实http请求，而是本地模拟web-api来完成
 */
import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './app/data/in-memory-data.service';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppRouterProviders} from './app/router/router';
import {AppComponent} from './app/components/app.component';

bootstrap(
    AppComponent
    , 
    [
        AppRouterProviders,
        HTTP_PROVIDERS,
        {provide: XHRBackend, useClass: InMemoryBackendService},
        {provide: SEED_DATA, useClass: InMemoryDataService}
    ]
);