import { Route } from "@angular/router";
import { RouterListPageComponent } from "./pages/router-list-page/router-list-page.component";
import { PersonDataPageComponent } from "./pages/person-data-page/person-data-page.component";

export const routes: Route [] = [
    {
        path: '',
        component: RouterListPageComponent
    }, {
        path: 'dados-pessoa/:id',
        component: PersonDataPageComponent
    }
]