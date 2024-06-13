import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, map, filter, Observable, of } from "rxjs"
import { Pessoa } from '../../../shared/model/person';

@Component({
    selector: 'app-json-page',
    templateUrl: './json.component.html'
})

export class JsonPageComponent implements OnInit {
    pessoas: Array<Pessoa> = []
    pessoas2: Observable<Array<Pessoa>> | null = null

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<Pessoa[]>("/assets/pessoas.json")
            .pipe(
                tap((value) => console.log(value)),
                // filter((value) => value.length < 5),
              //  map((value) => {
              //      return value.map(v => {return  {nome: v.nome, idade: 5}});
              //  })
            )
            .subscribe((dados) => this.pessoas = dados)

        this.pessoas2 = this.http.get<Array<Pessoa>>("/assets/pessoas.json");
    }
}

