import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
    imports: [RouterModule, CommonModule, FormsModule, HomeRoutingModule],
    exports: [HomeRoutingModule],
    declarations: [MainComponent, BemVindoComponent ],
    providers: [],
})
export class HomeModule { }
