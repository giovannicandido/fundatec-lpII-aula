import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subscription, Observable, of, map, filter, debounceTime } from 'rxjs'

@Component({
    selector: 'app-assincrono-page',
    templateUrl: './assincrono.component.html'
})
export class AssincronoPageComponent implements OnInit, OnDestroy {

    observable: Observable<number> = of(1)

    subject = new BehaviorSubject<number>(1)
    subject2 = new BehaviorSubject<string>("")

    searchForm = this.fb.group({
        searchValue: [""]
    })

    number = 1

    subscription: Subscription | null = null

    constructor(private fb: FormBuilder) { }


    ngOnInit() {
        setInterval(() => this.subject.next(this.number++), 1000)

        // this.subscription = this.subject.subscribe((valor) => console.log("Valor é: " + valor))
        this.searchForm.valueChanges
            .pipe(
                filter(value => {
                    let lenght = value.searchValue?.length == undefined ? 0 : value.searchValue.length
                    return lenght <= 10000
                }
                ),
                debounceTime(500)
            )
            .subscribe(value => this.search(value))
    }

    ngOnDestroy() {
        if (this.subscription != null) {
            this.subscription.unsubscribe()
        }
    }

    dobrarValor() {
        this.number = this.number * 2;
        this.subject2.next("Clickado em dobrar")
    }

    search(value: any) {
        //console.log(event)
        console.log("fazendo pesquisa no banco de dados para palavra")
        console.log(value)

    }
}