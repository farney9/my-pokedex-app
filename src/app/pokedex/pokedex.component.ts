import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../basic/models';
import { PokemonService } from '../basic/services/pokemon.service';

//cspell:disable

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  charizard?: Pokemon;
  charmander?: Pokemon;
  charmeleon?: Pokemon;
  pichu?: Pokemon;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPichu(172);
    this.getCharmander(4);
    this.getCharmeleon(5);
    this.getCharizard(6);
  }


  getCharmeleon(id: number) {
    this.pokemonService.getPokemon(id)
      .subscribe(resp => {
        this.charmeleon = resp
        // console.log(this.charmeleon.name);
      })
  }

  getPichu(id: number) {
    this.pokemonService.getPokemon(id)
      .subscribe(resp => {
        this.pichu = resp
        // console.log(this.charmeleon.name);
      })
  }

  getCharmander(id: number) {
    this.pokemonService.getPokemon(id)
      .subscribe(resp => {
        this.charmander = resp
        // console.log(this.charmander);
      })
  }

  getCharizard(id: number) {
    this.pokemonService.getPokemon(id)
      .subscribe(resp => {
        this.charizard = resp
        // console.log(this.charizard.name);
      })
  }
}
