import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [HeaderComponent, NavBarComponent],
    exports: [HeaderComponent, NavBarComponent]
})
export class LayoutModule {

}