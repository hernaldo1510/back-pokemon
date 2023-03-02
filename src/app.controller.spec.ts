import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './infrastructure/pokemon.controller';
import { ListarPokemonesService } from './application/listarPokemones.service';

describe('AppController', () => {
  let appController: PokemonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [ListarPokemonesService],
    }).compile();

    appController = app.get<PokemonController>(PokemonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getPokemones('Hello World!')).toBe('Hello World!');
    });
  });
});
