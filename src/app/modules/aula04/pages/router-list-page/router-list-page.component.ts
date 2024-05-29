import { Component } from '@angular/core';

import { Person, persons } from '../../../shared/model/person'

@Component({
  selector: 'app-router-list-page',
  templateUrl: './router-list-page.component.html',
  styleUrl: './router-list-page.component.scss'
})
export class RouterListPageComponent {
persons: Person[] = persons;

}
