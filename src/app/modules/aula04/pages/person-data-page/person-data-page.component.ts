import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, persons } from '../../../shared/model/person';

@Component({
  selector: 'app-person-data-page',
  templateUrl: './person-data-page.component.html',
  styleUrl: './person-data-page.component.scss'
})
export class PersonDataPageComponent implements OnInit, OnDestroy {
  
  person: Person | null | undefined = null

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = parseInt(this.router.snapshot.params["id"])

    this.person = persons.find(p => p.id == id);
    
    if(this.person === null || this.person === undefined) {
      console.error('Pessoa não encontrada: ' + id)
    }

    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('PersonData will be destroyed')
  }


}
