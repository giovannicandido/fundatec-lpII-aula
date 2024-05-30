import { Route } from "@angular/router";
import { RouterListPageComponent } from "./pages/router-list-page/router-list-page.component";
import { PersonDataPageComponent } from "./pages/person-data-page/person-data-page.component";
import { UserLoggedInGuard } from "../shared/guards/user-logged.guard";
import { PersonAddPageComponent } from "./pages/person-add-page/person-add-page.component";
import { formEditingGuard } from "../shared/guards/form-editing.guard";

export const routes: Route [] = [
    {
        path: '',
        component: RouterListPageComponent
    }, {
        path: 'dados-pessoa/:id',
        component: PersonDataPageComponent,
        canActivate: [UserLoggedInGuard]
    }, {
        path: 'add-person',
        component: PersonAddPageComponent,
        canDeactivate: [formEditingGuard]
    }
]