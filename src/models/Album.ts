import { Band } from "./Band";
import { Song } from "./Song";

export class Album {
    sNome: string;
    id: string;
    rAverageRating: string;
    sImagem: string;
    sNomeBanda: string
    dtDataLancamento: string
    band: Band
    serial: number
    songs: Song[]
    rPosicaoRankingGeral: number
    link: string
    
    constructor() {
        
    }
}