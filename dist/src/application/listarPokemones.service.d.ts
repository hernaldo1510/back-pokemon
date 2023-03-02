import { PokemonPort } from 'src/domain/pokemon.port';
import { Observable } from 'rxjs';
import { PokemonResponseDto } from '../domain/pokemon.response.dto';
export declare class ListarPokemonesService {
    private readonly port;
    constructor(port: PokemonPort);
    listarPokemones(): Observable<PokemonResponseDto>;
}
