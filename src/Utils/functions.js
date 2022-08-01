export const getCurNorma = (state) => {
    let formatedState = state.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    formatedState = formatedState.toLowerCase()
    switch(formatedState) {
        case "acre":
            return "NT 17/2021"
        case "alagoas":
            return "IT 17/2021"
        case "amapa":
            return "NT 10/2020"
        case "amazonas":
            return "IT 17/2019"
        case "bahia":
            return "IT 17/2016"
        case "ceara":
            return "PORTARIA 06/2004"
        case "distrito federal":
            return "NT 007/2011"
        case "espirito santo":
            return "NT 07/2011"
        case "goias":
            return "NT 17/2021"
        case "maranhao":
            return "NT 17/2021"
        case "mato grosso":
            return "NTCB 34/2020"
        case "mato grosso do sul":
            return "NT 17/2021"
        case "minas gerais":
            return "IT 012/2020"
        case "para":
            return "IT 08/2019"
        case "paraiba":
            return "NT 012/2015"
        case "parana":
            return "NPT 017/2021"
        case "pernambuco":
            return "NO RULE"
        case "piaui":
            return "IT 017/ 2019"
        case "rio de janeiro":
            return "NT 2-11/2019"
        case "rio grande do norte":
            return "IT 17/2018"
        case "rio grande do sul":
            return "RT 014.2004"
        case "rondonia":
            return "NT 17/2021"
        case "roraima":
            return "NT 17/2021"
        case "santa catarina":
            return "IN 28/2021"
        case "sao paulo":
            return "IT 017/ 2019"
        case "sergipe":
            return "IT 017/ 2019"
        case "tocantins":
            return "NT 012/2021"
        default:
            return discoverNormaByInitials(formatedState)
    }
}

const discoverNormaByInitials = (stateInitials) => {
    let curState = stateInitials.toUpperCase()
    switch(curState) {
        case "AC": 
            return "NT 17/2021"
        case "AL": 
            return "IT 17/2021"
        case "AP": 
            return "NT 10/2020"
        case "AM": 
            return "IT 17/2019"
        case "BA": 
            return "IT 17/2016"
        case "CE": 
            return "PORTARIA 06/2004"
        case "DF": 
            return "NT 007/2011"
        case "ES": 
            return "NT 07/2011"
        case "GO": 
            return "NT 17/2021"
        case "MA":
            return "NT 17/2021"
        case "MT":
            return "NTCB 34/2020"
        case "MS": 
            return "NT 17/2021"
        case "MG": 
            return "IT 012/2020"
        case "PA": 
            return "IT 08/2019"
        case "PB": 
            return "NT 012/2015"
        case "PR":
            return "NPT 017/2021"
        case "PE": 
            return "NO RULE"
        case "PI": 
            return "IT 017/ 2019"
        case "RJ": 
            return "NT 2-11/2019"
        case "RN": 
            return "IT 17/2018"
        case "RS": 
            return "RT 014.2004"
        case "RO": 
            return "NT 17/2021"
        case "RR": 
            return "NT 17/2021"
        case "SC": 
            return "IN 28/2021"
        case "SP": 
            return "IT 017/ 2019"
        case "SE": 
            return "IT 017/ 2019"
        case "TO":
            return "NT 012/2021"
        default:
            throw new Error(`Estado "${curState}" inválido.`)
    }
}

export const convertDate = (date) => {
    let placeholder = "dd/MM/yyyy"
    let localeDate = placeholder
    let day = String(date.getUTCDate())
    let month = String(date.getUTCMonth())
    let year = date.getUTCFullYear()
    localeDate = localeDate.replace("dd", day.length >= 2 ? day : `0${day}`)
    localeDate = localeDate.replace("MM", month.length >= 2 ? month : `0${month}`)
    localeDate = localeDate.replace("yyyy", year)
    return localeDate
}