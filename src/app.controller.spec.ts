import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './infrastructure/pokemon.controller';
import { ListarPokemonesService } from './application/listarPokemones.service';
import { HabilidadService } from './application/habilidadPokemon.service';
import { PokemonPort } from './domain/pokemon.port';
import { response } from 'express';

describe('Api Pokemon Controller', () => {
  let pokemonController: PokemonController;
  let habilidadService: HabilidadService;
  let listarPokemonesService: ListarPokemonesService;
  let pokemonPort: PokemonPort;

  beforeEach(async() => {
    habilidadService: new HabilidadService(pokemonPort); 
    listarPokemonesService: new ListarPokemonesService(pokemonPort); 
    appController: new PokemonController( listarPokemonesService, habilidadService);

  });

  describe('habilidadPokemon', () => {
    it('should return an array pokemon"', async () => {
    const result= ['test'];
    jest.spyOn(habilidadService,'habilidadPokemon').mockImplementation(()=> result)
      expect(pokemonController.getPokemones(listarPokemonesService)).toBe(result);
    });
  });
});
