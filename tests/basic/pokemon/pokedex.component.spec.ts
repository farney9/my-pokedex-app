import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { PokedexComponent } from '../../../src/app/pokedex/pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  let compiled: HTMLElement;
  let service: PokemonService
  let httpMock: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexComponent ],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
    compiled = fixture.nativeElement;

  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    console.log(compiled.innerHTML);
    
    expect(compiled).toMatchSnapshot();
  });


  test('Debe mostrar Loading al cargar la vista', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading ...')

  });

  /*
  test('Debe cargar a Charizard inmediatamente', () => {
    const pokemonMock = {
      name: 'charizardo!!',
      sprites: {
        other:{
          home: {
            front_default: 'https://charizard.com/front_default.png'
          }
        }
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    // esta prueba se asegura que en el ngOnInit se dispare la petición http del servicio pokemon.service para traer la inforamción del pokemon 6 
    // que es charizard

    expect(request.request.method).toBe('GET');

    request.flush(pokemonMock);

    fixture.detectChanges();

    // console.log(compiled.innerHTML);

    const h3  = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase()).toContain(pokemonMock.name.toLocaleLowerCase());
    expect(img?.src).toBe(pokemonMock.sprites.other.home.front_default);
    expect(img?.alt).toBe(pokemonMock.name);

  });
*/
});
