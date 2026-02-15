import { ExameService } from './exame.service';
import { Exame } from './exame.entity';
export declare class ExameController {
    private readonly exameService;
    constructor(exameService: ExameService);
    getExames(): Promise<Exame[]>;
    getExame(id: number): Promise<Exame>;
    addExame(exame: Exame): Promise<Exame>;
    replaceExame(id: number, newData: Exame): Promise<Exame>;
    removeExame(id: number): Promise<void>;
}
