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
exports.ExameService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exame_entity_1 = require("./exame.entity");
let ExameService = class ExameService {
    exameRepository;
    constructor(exameRepository) {
        this.exameRepository = exameRepository;
    }
    getExames() {
        return this.exameRepository.find();
    }
    async getExame(id) {
        let algo = await this.exameRepository.findOneBy({ id });
        if (!algo) {
            throw new common_1.NotFoundException(`{o id com o numero ${id} não foi achado}`);
        }
        return algo;
    }
    async addExame(exame) {
        let algo = await this.exameRepository.save(exame);
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel cadastrar}`);
        }
        return algo;
    }
    async replaceExame(id, exame) {
        const existingExame = await this.exameRepository.findOne({ where: { id } });
        if (!existingExame) {
            throw new common_1.NotFoundException(`Usuário com id ${id} não encontrado`);
        }
        await this.exameRepository.update(id, exame);
        let algo = await this.exameRepository.findOne({ where: { id } });
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel achar o dado modificado}`);
        }
        return algo;
    }
    async remove(id) {
        const result = await this.exameRepository.delete(id);
        if (!result) {
            throw new common_1.NotFoundException(`não deu para apagar o usuario com id: ${id}`);
        }
    }
};
exports.ExameService = ExameService;
exports.ExameService = ExameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exame_entity_1.Exame)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExameService);
//# sourceMappingURL=exame.service.js.map