import { Component } from '@angular/core';

import { MainComponent } from './main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'proyecto-prueba';
}
