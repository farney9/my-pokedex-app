import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../basic/models';
import { PokemonService } from '../basic/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  poke?: Pokemon;

  constructor( private readonly pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.poke = pokemon

        console.log(pokemon);
        
      })
  }

}
