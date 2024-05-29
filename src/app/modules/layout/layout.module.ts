import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuModule } from "primeng/menu"

@NgModule({
    declarations: [
        HeaderComponent,
        NavBarComponent,
        LayoutComponent,
        FooterComponent
    ],
    imports: [RouterModule, CommonModule, MenuModule],
    exports: []
})
export class LayoutModule {

}