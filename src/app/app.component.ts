import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula-01-2024';
}
