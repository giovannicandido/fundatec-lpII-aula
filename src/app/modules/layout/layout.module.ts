import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavBarComponent,
        LayoutComponent,
    ],
    imports: [RouterModule, CommonModule],
    exports: []
})
export class LayoutModule {

}