import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LayoutComponent } from "./modules/layout/layout/layout.component";

const routes: Route[] = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module')
                    .then(m => m.HomeModule)
            },
            // todo voltar aqui para carregar outro modulo
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}