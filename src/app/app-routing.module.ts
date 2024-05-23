import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { BemVindoComponent } from "./components/bem-vindo/bem-vindo.component";
import { LayoutComponent } from "./layout/layout/layout.component";

const routes: Route[] = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'bem-vindo',
                component: BemVindoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}