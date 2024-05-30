import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LOGGED_USER_ITEM } from '../../../shared/model/auth';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, InputTextModule, ButtonModule, FormsModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  errorMessage: Message[] = []

  password: string | null = null
  user: string | null = null

  constructor(private route: Router) {

  }


  login() {
    if(this.password === "1234") {
      localStorage.setItem(LOGGED_USER_ITEM, "true")
      this.route.navigate(["/"])
    } else {
      this.errorMessage = [{severity: "error", detail: "Senha errada use 1234" }]
    }
  }

}
