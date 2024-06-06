import { NgModule } from '@angular/core';
import { DatabindStylesPageComponent } from './pages/databind-styles-page/databind-styles-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { Aula03RoutingModule } from './aula03-routing.module';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [Aula03RoutingModule, ToolbarModule, ButtonModule,
         SplitButtonModule, InputTextModule, FormsModule ],
    exports: [Aula03RoutingModule],
    declarations: [HomePageComponent, DatabindStylesPageComponent, PipesPageComponent, ServicesPageComponent],
    providers: [],
})
export class Aula03Module { }
