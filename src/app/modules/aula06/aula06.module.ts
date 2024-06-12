import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AssincronoPageComponent } from './pages/assincrono/assincrono.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
    {
        path: '',
        component: AssincronoPageComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        InputTextModule, // importa o que é comum do angular (async, if, for, date etc.)
        ReactiveFormsModule, // Para ter o [(ngModel)]
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [AssincronoPageComponent], // o componente faz parte do modulo
    providers: [],
})
export class Aula06Module { }

