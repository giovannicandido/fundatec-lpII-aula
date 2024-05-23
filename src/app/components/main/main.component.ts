import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  msg = 'Hello'

  name: string = "Alan"

  changeMsg() {
    this.msg = `Hello, ${this.name}`
  }
}
