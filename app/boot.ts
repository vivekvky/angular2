import {bootstrap}    from 'angular2/platform/browser'
import {ApppComponent} from './appp.component'
import {ROUTER_PROVIDERS} from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

bootstrap(ApppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);