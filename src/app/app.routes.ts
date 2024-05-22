import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
    }, {
        path: 'bem-vindo', component: BemVindoComponent
    }
];
