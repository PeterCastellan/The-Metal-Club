export class User {
    id: number
    sName: string
    sAvatar: string
    link: string
    styles: any[] = new Array<any>();
    ranking: number
    styleRanking: any[] = new Array<any>();
    sEmail: string
    idFacebook: string
    dtBirthday: string
    fSex: string
    tsLastAccess: string
    tsAccess: string
    tsLastProfileUpdate: string
    tsLastPasswordUpdate: string
    dtRegistry: string
    iDiaSemanaRecomendacao: string
    iLoginAttempts: string
    fActive: string
    iLoginCount: string
    fReceberRecomendacaoPorEmail: string
    fRedirecionarTelaRenovacaoPlano: string
    fEnviarEmailRenovacaoPlano: string
    fEstiloRedefinido: string
    tsSubscription: string
    idADMEstilo: number[] = new Array<number>();
    idADMPais: number
    isFriend: boolean

    constructor() {
        
    }
}