import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AssincronoPageComponent } from './pages/assincrono/assincrono.component';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
    {
        path: '',
        component: AssincronoPageComponent
    }
]

@NgModule({
    imports: [
        CommonModule, // importa o que é comum do angular (async, if, for, date etc.)
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [AssincronoPageComponent], // o componente faz parte do modulo
    providers: [],
})
export class Aula06Module { }

