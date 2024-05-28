import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'bem-vindo',
        component: BemVindoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
