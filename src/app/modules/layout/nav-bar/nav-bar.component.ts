import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home'},
      {
        label: 'Modulos', icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Aula 03', icon: 'pi pi-address-book', routerLink: "/aula-03"
          },
          {
            label: 'Aula 04', icon: 'pi pi-address-book', routerLink: "/aula-04"
          }
        ]
      }
    ];
  }
}
