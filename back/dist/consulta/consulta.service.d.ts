import { Repository } from 'typeorm';
import { Consulta } from './consulta.entity';
export declare class ConsultaService {
    private consultaRepository;
    constructor(consultaRepository: Repository<Consulta>);
    getConsultas(): Promise<Consulta[]>;
    getConsulta(id: number): Promise<Consulta>;
    getConsultaPessoa(id: number): Promise<any>;
    addConsulta(consulta: Consulta): Promise<Consulta>;
    replaceConsulta(id: number, consulta: Consulta): Promise<Consulta>;
    remove(id: number): Promise<void>;
}
