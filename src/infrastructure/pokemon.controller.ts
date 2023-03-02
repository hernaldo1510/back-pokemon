import { Body, Controller, Get, Header, HttpCode, Param, Query } from '@nestjs/common';
import { ListarPokemonesService } from '../application/listarPokemones.service';
import { HabilidadService } from '../application/habilidadPokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly listarService: ListarPokemonesService, private readonly habilidadService: HabilidadService) {}

  @Get('getPokemones')
  @HttpCode(200)
  getPokemones( @Body()body) {
    return this.listarService.listarPokemones();
  }
  
  @Get('getHabilidadPokemon')
  @HttpCode(200)
  getHabilidadPokemon(@Query('namePokemon') _namePokemon: string) { 
    return this.habilidadService.habilidadPokemon(_namePokemon);
  }
}
