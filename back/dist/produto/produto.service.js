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
exports.ProdService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./produto.entity");
let ProdService = class ProdService {
    prodRepository;
    constructor(prodRepository) {
        this.prodRepository = prodRepository;
    }
    getProds() {
        return this.prodRepository.find();
    }
    async getProd(codigo) {
        let algo = await this.prodRepository.findOneBy({ codigo });
        if (!algo) {
            throw new common_1.NotFoundException(`{o codigo com o numero ${codigo} não foi achado}`);
        }
        return algo;
    }
    async addProd(prod) {
        let algo = await this.prodRepository.save(prod);
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel cadastrar}`);
        }
        return algo;
    }
    async replaceProd(codigo, prod) {
        const existingProd = await this.prodRepository.findOne({ where: { codigo } });
        if (!existingProd) {
            throw new common_1.NotFoundException(`Usuário com codigo ${codigo} não encontrado`);
        }
        await this.prodRepository.update(codigo, prod);
        let algo = await this.prodRepository.findOne({ where: { codigo } });
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel achar o dado modificado}`);
        }
        return algo;
    }
    async remove(codigo) {
        const result = await this.prodRepository.delete(codigo);
        if (!result) {
            throw new common_1.NotFoundException(`não deu para apagar o produto com codigo: ${codigo}`);
        }
    }
};
exports.ProdService = ProdService;
exports.ProdService = ProdService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Prod)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdService);
//# sourceMappingURL=produto.service.js.map