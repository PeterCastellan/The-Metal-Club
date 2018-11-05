import { Band } from "./Band";
import { Song } from "./Song";

export class Album {
    sNome: string;
    id: string;
    rAverageRating: string;
    sImagem: string;
    sNomeBanda: string
    dtDataLancamento: string
    band: Band = new Band()
    serial: number
    songs: Song[] = new Array<Song>()
    rPosicaoRankingGeral: number
    link: string
    
    constructor() {
        
    }
}