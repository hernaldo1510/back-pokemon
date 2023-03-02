import { ListarPokemonesService } from '../application/listarPokemones.service';
import { HabilidadService } from '../application/habilidadPokemon.service';
export declare class PokemonController {
    private readonly listarService;
    private readonly habilidadService;
    constructor(listarService: ListarPokemonesService, habilidadService: HabilidadService);
    getPokemones(body: any): import("rxjs").Observable<import("../domain/pokemon.response.dto").PokemonResponseDto>;
    getHabilidadPokemone(_namePokemon: string): import("rxjs").Observable<import("../domain/pokemon.response.dto").PokemonResponseDto>;
}
