import { PokemonPort } from 'src/domain/pokemon.port';
import { Observable } from 'rxjs';
import { PokemonResponseDto } from '../domain/pokemon.response.dto';
export declare class HabilidadService {
    private readonly port;
    constructor(port: PokemonPort);
    habilidadPokemon(namePokemon: any): Observable<PokemonResponseDto>;
}
