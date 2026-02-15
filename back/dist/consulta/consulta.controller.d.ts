import { ConsultaService } from './consulta.service';
import { Consulta } from './consulta.entity';
export declare class ConsultaController {
    private readonly consultaService;
    constructor(consultaService: ConsultaService);
    getConsultas(): Promise<Consulta[]>;
    getConsulta(id: number): Promise<Consulta>;
    getConsultaPessoa(id: number): Promise<any>;
    addConsulta(consulta: Consulta): Promise<Consulta>;
    replaceConsulta(id: number, newData: Consulta): Promise<Consulta>;
    removeConsulta(id: number): Promise<void>;
}
