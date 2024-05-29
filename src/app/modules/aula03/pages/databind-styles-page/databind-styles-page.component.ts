import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-databind-styles-page',
  templateUrl: './databind-styles-page.component.html',
  styleUrl: './databind-styles-page.component.scss',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ]),
    trigger('color', [
      state('blue', style({ backgroundColor: "blue" })),
      state('red', style({ backgroundColor: "red" })),
      state('yellow', style({ backgroundColor: "yellow" })),
      state('brown', style({ backgroundColor: "brown" })),
      transition('blue <=> red', animate('2s ease-in-out')),
      transition('yellow <=> brown', animate('2s ease-in-out')),
    ]),
  ],
})
export class DatabindStylesPageComponent {

  color = 'red'
  severity: "success" | "info" = 'info'

  mudarCor() {
    this.color = this.color == 'red' ? 'blue' : 'red'
    this.severity = this.severity == 'info' ? 'success' : 'info'
  }

}
