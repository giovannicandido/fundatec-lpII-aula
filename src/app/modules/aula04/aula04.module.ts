import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routers';
import { RouterListPageComponent } from './pages/router-list-page/router-list-page.component';
import { TableModule } from 'primeng/table';
import { PersonDataPageComponent } from './pages/person-data-page/person-data-page.component';

@NgModule({
  declarations: [
    RouterListPageComponent,
    PersonDataPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule
  ]
})
export class Aula04Module { }
