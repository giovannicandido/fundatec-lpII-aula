import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'

@Component({
    selector: 'app-assincrono-page',
    templateUrl: './assincrono.component.html'
})
export class AssincronoPageComponent implements OnInit {

    observable: Observable<number> = of(1)

    subject = new BehaviorSubject<number>(1)

    number = 1

    constructor() { }

    ngOnInit() {
        setInterval(() => this.subject.next(this.number++), 1000)
    }
}