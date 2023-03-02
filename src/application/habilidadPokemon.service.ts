import { Inject, Injectable, Body } from '@nestjs/common';
import { PokemonPort } from 'src/domain/pokemon.port';
import { Observable } from 'rxjs';
import { PokemonResponseDto } from '../domain/pokemon.response.dto';

@Injectable()
export class HabilidadService {
constructor(
  @Inject('PokemonPort') private readonly port: PokemonPort,
) { }
  habilidadPokemon(namePokemon) {
    return this.port.getHabilidadPokemon(namePokemon);
  }
}
