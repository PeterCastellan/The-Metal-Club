import { Album } from "./Album";
import { Style } from "./Style";
import { Country } from "./Country";

export class Band {
    id: string
    sNome: string
    sImagem: string
    sNomeEstiloPrincipal: string
    sDescricao: string
    sFonte: string
    rAverageRating: string
    country: Country = new Country()
    link: string
    styles: Style[] = new Array<Style>()
    albums: Album[] = new Array<Album>()
    rRankingGeral: number
    serial: string

    constructor() {
    
    }
}