import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module').then(
                    module => module.HomeModule
                )
            }
        ]
    }, {
        path: 'login', component: LoginComponent, 
    }
];
