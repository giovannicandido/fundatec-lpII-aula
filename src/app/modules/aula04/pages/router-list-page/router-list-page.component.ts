import { Component } from '@angular/core';

import { Person, persons } from '../../../shared/model/person'
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-list-page',
  templateUrl: './router-list-page.component.html',
  styleUrl: './router-list-page.component.scss'
})
export class RouterListPageComponent {


  persons: Person[] = persons;

  selectedPerson: Person | null = null;

  constructor(private router: Router) { }

  navigate(id: number) {
    console.log('Usuario clicou na idade vou navegar em 5 segundos')

    setTimeout(() => {
      this.router.navigate(['aula-04/dados-pessoa/', id])
    }, 5000)

  }

  navigateSelected() {
    if(this.selectedPerson !== null) {
      this.navigate(this.selectedPerson.id)
    } else {
      console.error('Pessoa não selecionada, selecione uma')
    }
  }

}
