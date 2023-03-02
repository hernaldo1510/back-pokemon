import { Module } from '@nestjs/common';
import { PokemonController } from './infrastructure/pokemon.controller';
import { ListarPokemonesService } from './application/listarPokemones.service';
import { apiPokemonAdapter } from './infrastructure/adapters/apiPokemon.adapter';
import { HttpModule } from '@nestjs/axios';
import { HabilidadService } from './application/habilidadPokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [ListarPokemonesService, 
  HabilidadService,
    {
      provide: 'PokemonPort',
      useClass: apiPokemonAdapter
    },],
})
export class AppModule {}
