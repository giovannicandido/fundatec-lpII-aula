import { inject } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class VillainsComponent implements CanComponentDeactivate { ...
//
export interface CanComponentDeactivate {
    form: FormGroup;
}

export const formEditingGuard: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate
) => {
        if (component.form.valid) {
            console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - allowed`);
            return true;
        } else {
            console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - not allowed`);
            return false;
    }
}