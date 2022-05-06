import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.css']
})
export class CharizardComponent implements OnInit {

  charizard?: Pokemon;

  constructor( private readonly pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.charizard = pokemon

        console.log(pokemon);
        
      })
  }

}
