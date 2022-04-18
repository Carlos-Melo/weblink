import { Plano } from "./plano";

export interface Usuario {
    id?: number;
	nome?: string;
	cpfCnpj?: string;
	email?: string;
	senha?: string;
	cep?: string;
	estado?: string;
	cidade?: string;
	bairro?: string;
	rua?: string;
	numero?: string;
	cliente?: boolean;
	administrador?: boolean;
	conexao?: boolean;
    plano?: Plano;
}