import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent, NavBarComponent],
    imports: [RouterModule],
    exports: [HeaderComponent, NavBarComponent]
})
export class LayoutModule {

}