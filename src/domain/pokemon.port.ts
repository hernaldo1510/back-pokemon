import { Observable } from "rxjs";
import { PokemonResponseDto } from'./pokemon.response.dto'

export interface PokemonPort {
 getPokemones(): Observable<PokemonResponseDto>;
 getHabilidadPokemon(namePokemon): Observable<PokemonResponseDto>;
}