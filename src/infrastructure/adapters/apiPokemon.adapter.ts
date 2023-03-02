import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { response } from "express";
import { Observable, map } from "rxjs";
import { PokemonPort } from "src/domain/pokemon.port";
import { PokemonResponseDto } from "src/domain/pokemon.response.dto";
import { ConfigService } from '@nestjs/config';



@Injectable()

export class apiPokemonAdapter implements PokemonPort {
 
  constructor(
    private readonly httpService: HttpService,
  ) {}
  url =  'https://pokeapi.co/api/v2/pokemon/'

  getPokemones():Observable<AxiosResponse<PokemonResponseDto>>{
  return this.httpService.get(this.url).pipe(
  map((res)=> {return res.data}));
  }
 
  getHabilidadPokemon(namePokemon):Observable<AxiosResponse<PokemonResponseDto>>{
    let pokemon = namePokemon;
    
    return this.httpService.get(this.url + pokemon).pipe(
    map((res)=> {return res.data.abilities}));
    }
}