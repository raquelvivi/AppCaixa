"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExameModule = void 0;
const common_1 = require("@nestjs/common");
const exame_controller_1 = require("./exame.controller");
const exame_service_1 = require("./exame.service");
const exame_entity_1 = require("./exame.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ExameModule = class ExameModule {
};
exports.ExameModule = ExameModule;
exports.ExameModule = ExameModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exame_entity_1.Exame])],
        controllers: [exame_controller_1.ExameController],
        providers: [exame_service_1.ExameService],
        exports: [exame_service_1.ExameService],
    })
], ExameModule);
//# sourceMappingURL=exame.module.js.map