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

  tipoPokemon: string = '';
  ability: string = '';

  constructor( private readonly pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.poke = pokemon
        this.tipoPokemon = this.poke.types[0].type.name;
        this.ability = this.poke.abilities[0].ability.name;

        console.log(this.poke.types[0].type.name);
        
      })
  }

}
