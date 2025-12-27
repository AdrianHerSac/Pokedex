import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  // CAMBIO AQUÍ TAMBIÉN:
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'proyecto-prueba';
}
