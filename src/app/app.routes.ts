import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { UserLoggedInGuard } from './modules/shared/guards/user-logged.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                canActivate: [UserLoggedInGuard],
                loadChildren: () => import('./modules/home/home.module').then(
                    module => module.HomeModule
                )
            }, {
                path: 'aula-03',
                loadChildren: () => import('./modules/aula03/aula03.module').then(
                    module => module.Aula03Module
                )
            }, {
                path: 'aula-04',
                loadChildren: () => import("./modules/aula04/aula04.module")
                    .then(module => module.Aula04Module)
            }
        ]
    }, {
        path: 'login', component: LoginComponent
    }
];
