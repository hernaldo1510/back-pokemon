import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonController } from './infrastructure/pokemon.controller';
import { ListarPokemonesService } from './application/listarPokemones.service';
import { apiPokemonAdapter } from './infrastructure/adapters/apiPokemon.adapter';
import { HttpModule } from '@nestjs/axios';
import { HabilidadService } from './application/habilidadPokemon.service';

@Module({
  imports: [ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
  isGlobal: true
  }),
  HttpModule],
  controllers: [PokemonController],
  providers: [ListarPokemonesService, 
  HabilidadService,
    {
      provide: 'PokemonPort',
      useClass: apiPokemonAdapter
    },],
})
export class AppModule {}
