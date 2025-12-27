import { Component, ViewChild, ElementRef } from '@angular/core'; // <--- OJO: Añade ViewChild y ElementRef
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {

  // 1. "Agarramos" el contenedor del HTML
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Copia esta lista dentro de la clase
  pokemons = [
    { id: 1, name: 'Bulbasaur', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', type: 'Planta , Veneno'},
    { id: 2, name: 'Ivysaur', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png', type: 'Planta , Veneno'},
    { id: 3, name: 'Venusaur', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png', type: 'Planta , Veneno'},
    { id: 341, name: 'Corphish', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/341.png', type: 'Agua' },
    { id: 188, name: 'Skiploom', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png', type: 'Planta' },
    { id: 539, name: 'Sawk', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/539.png', type: 'Lucha' },
    { id: 497, name: 'Serperior', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/497.png', type: 'Planta' },
    { id: 927, name: 'Dachsbun', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/927.png', type: 'Hada' },
    { id: 25, name: 'Pikachu', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png', type: 'Eléctrico' },
  ];

  scrollRight() {
    const element = this.scrollContainer.nativeElement;

    // Calculamos cuánto scroll máximo hay disponible
    // (Ancho total del contenido - Ancho visible en pantalla)
    const maxScroll = element.scrollWidth - element.clientWidth;

    // Si ya estamos casi al final (damos un margen de 10px por si acaso)
    if (element.scrollLeft >= maxScroll - 10) {
      // VOLVER AL INICIO (Rebobinar)
      element.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // AVANZAR NORMAL
      element.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollLeft() {
    const element = this.scrollContainer.nativeElement;

    // Si estamos al principio del todo (posición 0)
    if (element.scrollLeft === 0) {
      // IR AL FINAL (Saltar al último)
      element.scrollTo({ left: element.scrollWidth, behavior: 'smooth' });
    } else {
      // RETROCEDER NORMAL
      element.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}
