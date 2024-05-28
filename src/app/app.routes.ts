import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app-routing.module').then(
            module => module.AppRoutingModule
        )
    }, {
        path: 'login', component: LoginComponent, 
    }
];
