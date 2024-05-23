import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { FormsModule } from "@angular/forms";
import { MainComponent } from "../components/main/main.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent,
        NavBarComponent,
        LayoutComponent,
        MainComponent],
    imports: [RouterModule, FormsModule, CommonModule],
    exports: [HeaderComponent, NavBarComponent, LayoutComponent]
})
export class LayoutModule {

}