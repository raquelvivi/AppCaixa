import { Repository } from 'typeorm';
import { Exame } from './exame.entity';
export declare class ExameService {
    private exameRepository;
    constructor(exameRepository: Repository<Exame>);
    getExames(): Promise<Exame[]>;
    getExame(id: number): Promise<Exame>;
    addExame(exame: Exame): Promise<Exame>;
    replaceExame(id: number, exame: Exame): Promise<Exame>;
    remove(id: number): Promise<void>;
}
