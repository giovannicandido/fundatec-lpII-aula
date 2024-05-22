import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { BemVindoComponent } from "./components/bem-vindo/bem-vindo.component";

const routes: Route[] = [
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}