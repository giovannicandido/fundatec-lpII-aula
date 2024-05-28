import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  msg = 'Hello'

  name: string = "Alan"
  item = ''
  items = [
    'Primeiro',
    'Segundo',
    'Terceiro'
  ]

  isDisabled = false

  changeMsg() {
    this.msg = `Hello, ${this.name}`
  }

  adicionarItem() {
    if(this.item.trim() === '') {
      alert('Item vazio')
    } else {
      this.items.push(this.item)
    }
  }

  removeItem(item: string) {
    let index = this.items.indexOf(item);
    if(index >= 0) {
      this.items.splice(index, 1)
    }
  }

  mouseEnter() {
    this.msg = "Força rio grande"
    this.isDisabled = true
  }

  mouseLeave() {
    this.msg = ""
    this.isDisabled = false
  }
}
