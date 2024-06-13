import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { JsonPageComponent } from './pages/json/json.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ListaPessoaPageComponent } from './pages/lista-pessoa/lista-pessoa.component';

const routes: Route[] = [
    {
        path: '',
        component: JsonPageComponent
    }, {
        path: 'lista-pessoa',
        component: ListaPessoaPageComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        InputTextModule, // importa o que é comum do angular (async, if, for, date etc.)
        ReactiveFormsModule, // Para ter o [(ngModel)]
        HttpClientModule,
        TableModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [JsonPageComponent, ListaPessoaPageComponent], // o componente faz parte do modulo
    providers: [],
})
export class Aula07Module { }

