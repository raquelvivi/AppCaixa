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
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consulta_entity_1 = require("./consulta.entity");
let ConsultaService = class ConsultaService {
    consultaRepository;
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async getConsultas() {
        let algo = await this.consultaRepository.query(`SELECT p.nome AS "paciente",
        p.id, c.hora, c.data,
        m.nome AS "medico",
        h.nome AS "hospital"
        from pessoa p 
        inner join consulta c on p.id = c.pessoa
        inner join medico m on c.medico = m.id
        inner join hospital h on c.hospital = h.id
    `);
        return algo;
    }
    async getConsulta(id) {
        let algo = await this.consultaRepository.findOneBy({ id });
        if (!algo) {
            throw new common_1.NotFoundException(`{o id com o numero ${id} não foi achado}`);
        }
        return algo;
    }
    async getConsultaPessoa(id) {
        let algo = await this.consultaRepository.query(`SELECT p.nome AS "paciente",
        p.id, c.hora, c.data,
        m.nome AS "medico",
        h.nome AS "hospital"
        from pessoa p 
        inner join consulta c on p.id = c.pessoa
        inner join medico m on c.medico = m.id
        inner join hospital h on c.hospital = h.id
        WHERE p.id = $1
    `, [id]);
        if (!algo) {
            throw new common_1.NotFoundException(`{o id com o numero ${id} não foi achado}`);
        }
        return algo;
    }
    async addConsulta(consulta) {
        let algo = await this.consultaRepository.save(consulta);
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel cadastrar}`);
        }
        return algo;
    }
    async replaceConsulta(id, consulta) {
        const existingConsulta = await this.consultaRepository.findOne({ where: { id } });
        if (!existingConsulta) {
            throw new common_1.NotFoundException(`Usuário com id ${id} não encontrado`);
        }
        await this.consultaRepository.update(id, consulta);
        let algo = await this.consultaRepository.findOne({ where: { id } });
        if (!algo) {
            throw new common_1.NotFoundException(`{não foi possivel achar o dado modificado}`);
        }
        return algo;
    }
    async remove(id) {
        const result = await this.consultaRepository.delete(id);
        if (!result) {
            throw new common_1.NotFoundException(`não deu para apagar o usuario com id: ${id}`);
        }
    }
};
exports.ConsultaService = ConsultaService;
exports.ConsultaService = ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consulta_entity_1.Consulta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsultaService);
//# sourceMappingURL=consulta.service.js.map