import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { PokemonPort } from "src/domain/pokemon.port";
import { PokemonResponseDto } from "src/domain/pokemon.response.dto";
export declare class apiPokemonAdapter implements PokemonPort {
    private readonly httpService;
    constructor(httpService: HttpService);
    url: string;
    getPokemones(): Observable<AxiosResponse<PokemonResponseDto>>;
    getHabilidadPokemon(namePokemon: any): Observable<AxiosResponse<PokemonResponseDto>>;
}
