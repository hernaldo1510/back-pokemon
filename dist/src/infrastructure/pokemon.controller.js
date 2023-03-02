"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
const common_1 = require("@nestjs/common");
const listarPokemones_service_1 = require("../application/listarPokemones.service");
const habilidadPokemon_service_1 = require("../application/habilidadPokemon.service");
let PokemonController = class PokemonController {
    constructor(listarService, habilidadService) {
        this.listarService = listarService;
        this.habilidadService = habilidadService;
    }
    getPokemones(body) {
        return this.listarService.listarPokemones();
    }
    getHabilidadPokemon(_namePokemon) {
        return this.habilidadService.habilidadPokemon(_namePokemon);
    }
};
__decorate([
    (0, common_1.Get)('getPokemones'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "getPokemones", null);
__decorate([
    (0, common_1.Get)('getHabilidadPokemon'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)('namePokemon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "getHabilidadPokemon", null);
PokemonController = __decorate([
    (0, common_1.Controller)('pokemon'),
    __metadata("design:paramtypes", [listarPokemones_service_1.ListarPokemonesService, habilidadPokemon_service_1.HabilidadService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map