import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'

@Component({
    selector: 'app-assincrono-page',
    templateUrl: './assincrono.component.html'
})
export class AssincronoPageComponent implements OnInit {

    observable: Observable<number> = of(1)

    subject = new BehaviorSubject<number>(1)
    subject2 = new BehaviorSubject<string>("")

    number = 1

    constructor() { }

    ngOnInit() {
        setInterval(() => this.subject.next(this.number++), 1000)

        this.subject.subscribe((valor) => console.log("Valor é: " + valor))
    }

    dobrarValor() {
        this.number = this.number * 2;
        this.subject2.next("Clickado em dobrar")
    }
}