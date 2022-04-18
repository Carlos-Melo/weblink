import { Usuario } from "./usuario";

export interface Boleto {
    id?: number;
	dtPagamento?: Date;
	isPago?: boolean;
    usuario?: Usuario;
}