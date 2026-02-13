import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Pokemon {
    id: number;
    name: string;
    img: string;
    type: string;
}

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    getPokemons(limit: number = 1302, offset: number = 0): Observable<Pokemon[]> {
        return this.http.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
            switchMap(response => {
                const detailsRequests = response.results.map((pokemon: any) =>
                    this.getPokemonDetails(pokemon.url)
                );
                return forkJoin(detailsRequests) as Observable<Pokemon[]>;
            })
        );
    }

    private getPokemonDetails(url: string): Observable<Pokemon> {
        return this.http.get<any>(url).pipe(
            map(details => ({
                id: details.id,
                name: details.name.charAt(0).toUpperCase() + details.name.slice(1), // Capitalize
                img: details.sprites.other['official-artwork'].front_default,
                type: details.types.map((t: any) => t.type.name).join(', ')
            }))
        );
    }
}