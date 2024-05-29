import { NgModule } from '@angular/core';
import { DatabindStylesPageComponent } from './pages/databind-styles-page/databind-styles-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { Aula03RoutingModule } from './aula03-routing.module';

@NgModule({
    imports: [Aula03RoutingModule],
    exports: [Aula03RoutingModule],
    declarations: [HomePageComponent, DatabindStylesPageComponent, PipesPageComponent, ServicesPageComponent],
    providers: [],
})
export class Aula03Module { }
