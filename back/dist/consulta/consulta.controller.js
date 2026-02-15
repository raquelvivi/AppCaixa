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
exports.ConsultaController = void 0;
const common_1 = require("@nestjs/common");
const consulta_service_1 = require("./consulta.service");
const consulta_entity_1 = require("./consulta.entity");
let ConsultaController = class ConsultaController {
    consultaService;
    constructor(consultaService) {
        this.consultaService = consultaService;
    }
    getConsultas() {
        return this.consultaService.getConsultas();
    }
    getConsulta(id) {
        return this.consultaService.getConsulta(id);
    }
    getConsultaPessoa(id) {
        return this.consultaService.getConsultaPessoa(id);
    }
    addConsulta(consulta) {
        return this.consultaService.addConsulta(consulta);
    }
    replaceConsulta(id, newData) {
        return this.consultaService.replaceConsulta(id, newData);
    }
    removeConsulta(id) {
        return this.consultaService.remove(id);
    }
};
exports.ConsultaController = ConsultaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsultas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsulta", null);
__decorate([
    (0, common_1.Get)('pessoa/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConsultaController.prototype, "getConsultaPessoa", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [consulta_entity_1.Consulta]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "addConsulta", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, consulta_entity_1.Consulta]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "replaceConsulta", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "removeConsulta", null);
exports.ConsultaController = ConsultaController = __decorate([
    (0, common_1.Controller)('consultas'),
    __metadata("design:paramtypes", [consulta_service_1.ConsultaService])
], ConsultaController);
//# sourceMappingURL=consulta.controller.js.map