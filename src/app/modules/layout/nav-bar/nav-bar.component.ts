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
          }, {
            label: 'Aula 06', icon: 'pi pi-bolt', routerLink: "/aula-06"
          }, {
            label: 'Aula 07', icon: 'pi pi-file-import pi-spin', routerLink: "/aula-07",
          
          },
          {label: 'Lista Pessoa', routerLink: "/aula-07/lista-pessoa"}
        ]
      }
    ];
  }
}
