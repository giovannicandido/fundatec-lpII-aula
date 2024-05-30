import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routers';
import { RouterListPageComponent } from './pages/router-list-page/router-list-page.component';
import { TableModule } from 'primeng/table';
import { PersonDataPageComponent } from './pages/person-data-page/person-data-page.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PersonAddPageComponent } from './pages/person-add-page/person-add-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RouterListPageComponent,
    PersonDataPageComponent,
    PersonAddPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class Aula04Module { }
