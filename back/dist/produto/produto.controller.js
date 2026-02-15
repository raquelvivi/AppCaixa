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
exports.ProdController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const produto_entity_1 = require("./produto.entity");
let ProdController = class ProdController {
    ProdService;
    constructor(ProdService) {
        this.ProdService = ProdService;
    }
    getProds() {
        return this.ProdService.getProds();
    }
    getProd(codigo) {
        return this.ProdService.getProd(codigo);
    }
    addProd(Prod) {
        return this.ProdService.addProd(Prod);
    }
    replaceProd(codigo, newData) {
        return this.ProdService.replaceProd(codigo, newData);
    }
    removeProd(codigo) {
        return this.ProdService.remove(codigo);
    }
};
exports.ProdController = ProdController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdController.prototype, "getProds", null);
__decorate([
    (0, common_1.Get)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdController.prototype, "getProd", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_entity_1.Prod]),
    __metadata("design:returntype", Promise)
], ProdController.prototype, "addProd", null);
__decorate([
    (0, common_1.Put)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, produto_entity_1.Prod]),
    __metadata("design:returntype", Promise)
], ProdController.prototype, "replaceProd", null);
__decorate([
    (0, common_1.Delete)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdController.prototype, "removeProd", null);
exports.ProdController = ProdController = __decorate([
    (0, common_1.Controller)('prods'),
    __metadata("design:paramtypes", [produto_service_1.ProdService])
], ProdController);
//# sourceMappingURL=produto.controller.js.map