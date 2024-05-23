import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, 
    }, {
        path: 'estoque',
        loadChildren: () => import('./app-routing.module').then(
            module => module.AppRoutingModule
        )
    }
];
