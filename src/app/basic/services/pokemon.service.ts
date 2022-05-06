import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private readonly http: HttpClient) { }

  getPokemon( id: number):Observable<Pokemon> {
   return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
