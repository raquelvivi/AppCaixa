import { ProdService } from './produto.service';
import { Prod } from './produto.entity';
export declare class ProdController {
    private readonly ProdService;
    constructor(ProdService: ProdService);
    getProds(): Promise<Prod[]>;
    getProd(codigo: string): Promise<Prod>;
    addProd(Prod: Prod): Promise<Prod>;
    replaceProd(codigo: string, newData: Prod): Promise<Prod>;
    removeProd(codigo: string): Promise<void>;
}
