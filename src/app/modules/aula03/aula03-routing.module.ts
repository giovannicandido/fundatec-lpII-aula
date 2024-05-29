import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DatabindStylesPageComponent } from './pages/databind-styles-page/databind-styles-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';

const routes: Route [] = [
    {
        path: '',
        component: HomePageComponent
    }, {
        path: 'databind-styles',
        component: DatabindStylesPageComponent
    }, {
        path: 'pipes',
        component: PipesPageComponent
    }, {
        path: 'services',
        component: ServicesPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Aula03RoutingModule { }
