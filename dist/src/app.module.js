"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const pokemon_controller_1 = require("./infrastructure/pokemon.controller");
const listarPokemones_service_1 = require("./application/listarPokemones.service");
const apiPokemon_adapter_1 = require("./infrastructure/adapters/apiPokemon.adapter");
const axios_1 = require("@nestjs/axios");
const habilidadPokemon_service_1 = require("./application/habilidadPokemon.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [pokemon_controller_1.PokemonController],
        providers: [listarPokemones_service_1.ListarPokemonesService,
            habilidadPokemon_service_1.HabilidadService,
            {
                provide: 'PokemonPort',
                useClass: apiPokemon_adapter_1.apiPokemonAdapter
            },],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map