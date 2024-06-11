import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AssincronoPageComponent } from './pages/assincrono/assincrono.component';

const routes: Route[] = [
    {
        path: '',
        component: AssincronoPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class Aula06Module { }

