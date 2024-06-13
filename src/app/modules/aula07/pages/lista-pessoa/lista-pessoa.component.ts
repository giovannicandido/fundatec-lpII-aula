import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../../../shared/model/person';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-list-pessoa-page',
    templateUrl: './lista-pessoa.component.html'
})

export class ListaPessoaPageComponent implements OnInit {
    pessoas: Observable<Pessoa[]> = of([])

    constructor(private http: HttpClient) { }

    ngOnInit() { 
        this.pessoas = this.http.get<Array<Pessoa>>("/assets/pessoas.json");
    }
}