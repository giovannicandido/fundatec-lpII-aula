import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
    declarations: [HeaderComponent, NavBarComponent, LayoutComponent],
    imports: [RouterModule],
    exports: [HeaderComponent, NavBarComponent, LayoutComponent]
})
export class LayoutModule {

}