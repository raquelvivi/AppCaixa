import { Repository } from 'typeorm';
import { Prod } from './produto.entity';
export declare class ProdService {
    private prodRepository;
    constructor(prodRepository: Repository<Prod>);
    getProds(): Promise<Prod[]>;
    getProd(codigo: string): Promise<Prod>;
    addProd(prod: Prod): Promise<Prod>;
    replaceProd(codigo: string, prod: Prod): Promise<Prod>;
    remove(codigo: string): Promise<void>;
}
