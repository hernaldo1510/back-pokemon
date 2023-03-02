import { Inject, Injectable, Body } from '@nestjs/common';
import { PokemonPort } from 'src/domain/pokemon.port';
import { Observable } from 'rxjs';
import { PokemonResponseDto } from '../domain/pokemon.response.dto';

@Injectable()
export class ListarPokemonesService {
constructor(
  @Inject('PokemonPort') private readonly port: PokemonPort,
) { }
  listarPokemones() {
    return this.port.getPokemones();
  }
}
