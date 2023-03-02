import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { response } from "express";
import { Observable, map } from "rxjs";
import { PokemonPort } from "src/domain/pokemon.port";
import { PokemonResponseDto } from "src/domain/pokemon.response.dto";



@Injectable()

export class apiPokemonAdapter implements PokemonPort {
 
  constructor(
    private readonly httpService: HttpService
  ) {}
    
 
  getPokemones():Observable<AxiosResponse<PokemonResponseDto>>{
  return this.httpService.get('https://pokeapi.co/api/v2/pokemon').pipe(
  map((res)=> {return res.data}));
  }
 
  getHabilidadPokemon(namePokemon):Observable<AxiosResponse<PokemonResponseDto>>{
    let pokemon = namePokemon;
    
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/'+ pokemon).pipe(
    map((res)=> {return res.data.abilities}));
    }
}