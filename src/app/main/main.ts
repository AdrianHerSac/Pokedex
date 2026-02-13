import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService, Pokemon } from '../pokemon.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent implements OnInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private pokemonService = inject(PokemonService);

  pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe({
      next: (data) => {
        this.pokemons = data;
      },
      error: (err) => {
        console.error('Error fetching pokemons:', err);
      }
    });
  }

  scrollRight() {
    const element = this.scrollContainer.nativeElement;

    const maxScroll = element.scrollWidth - element.clientWidth;

    if (element.scrollLeft >= maxScroll - 10) {
      element.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      element.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollLeft() {
    const element = this.scrollContainer.nativeElement;

    if (element.scrollLeft === 0) {
      element.scrollTo({ left: element.scrollWidth, behavior: 'smooth' });
    } else {
      element.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}
