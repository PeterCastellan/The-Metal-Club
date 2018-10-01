import { Band } from "./Band";
import { Album } from "./Album";

export class Style {
    id: number;
    link: string;
    sNome: string;
    sDescricao: string;
    sImagem: string;
    topBands: Band[];
    topAlbums: Album[];

    constructor() {
        
    }
}