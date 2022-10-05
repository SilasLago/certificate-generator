const configs = [
    ["NT 17/2021", "8"], 
    ["IT 17/2021", "8"], 
    ["NT 10/2020", "8"],
    ["IT 17/2019", "8"],
    ["IT 17/2016", "8"],
    ["PORTARIA 06/2004", "8"],
    ["NT 007/2011", "8"],
    ["NT 07/2011", "8"],
    ["NT 17/2021", "8"],
    ["NT 17/2021", "8"],
    ["NTCB 34/2020", "8"],
    ["NT 17/2021", "8"],
    ["IT 012/2020", "8"],
    ["IT 08/2019", "8"],
    ["NT 012/2015", "8"],
    ["NPT 017/2021", "8"],
    ["NO RULE", "8"],
    ["IT 017/ 2019", "8"],
    ["NT 2-11/2019", "8"],
    ["IT 17/2018", "8"],
    ["RT 014.2004", "8"],
    ["NT 17/2021", "8"],
    ["NT 17/2021", "8"],
    ["IN 28/2021", "8"],
    ["IT 017/ 2019", "8"],
    ["IT 017/ 2019", "8"],
    ["NT 012/2021", "8"]
]

export const getUFSpecificity = (state) => {
    let formatedState = state.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    formatedState = formatedState.toLowerCase()
    switch(formatedState) {
        case "acre":
            return configs[0]
        case "alagoas":
            return configs[1]
        case "amapa":
            return configs[2]
        case "amazonas":
            return configs[3]
        case "bahia":
            return configs[4]
        case "ceara":
            return configs[5]
        case "distrito federal":
            return configs[6]
        case "espirito santo":
            return configs[7]
        case "goias":
            return configs[8]
        case "maranhao":
            return configs[9]
        case "mato grosso":
            return configs[10]
        case "mato grosso do sul":
            return configs[11]
        case "minas gerais":
            return configs[12]
        case "para":
            return configs[13]
        case "paraiba":
            return configs[14]
        case "parana":
            return configs[15]
        case "pernambuco":
            return configs[16]
        case "piaui":
            return configs[17]
        case "rio de janeiro":
            return configs[18]
        case "rio grande do norte":
            return configs[19]
        case "rio grande do sul":
            return configs[20]
        case "rondonia":
            return configs[21]
        case "roraima":
            return configs[22]
        case "santa catarina":
            return configs[23]
        case "sao paulo":
            return configs[24]
        case "sergipe":
            return configs[25]
        case "tocantins":
            return configs[26]
        default:
            return discoverNormaByInitials(formatedState)
    }
}

const discoverNormaByInitials = (stateInitials) => {
    let curState = stateInitials.toUpperCase()
    switch(curState) {
        case "AC": 
            return configs[0]
        case "AL": 
            return configs[1]
        case "AP": 
            return configs[2]
        case "AM": 
            return configs[3]
        case "BA": 
            return configs[4]
        case "CE": 
            return configs[5]
        case "DF": 
            return configs[6]
        case "ES": 
            return configs[7]
        case "GO": 
            return configs[8]
        case "MA":
            return configs[9]
        case "MT":
            return configs[10]
        case "MS": 
            return configs[11]
        case "MG": 
            return configs[12]
        case "PA": 
            return configs[13]
        case "PB": 
            return configs[14]
        case "PR":
            return configs[15]
        case "PE": 
            return configs[16]
        case "PI": 
            return configs[17]
        case "RJ": 
            return configs[18]
        case "RN": 
            return configs[19]
        case "RS": 
            return configs[20]
        case "RO": 
            return configs[21]
        case "RR": 
            return configs[22]
        case "SC": 
            return configs[23]
        case "SP": 
            return configs[24]
        case "SE": 
            return configs[25]
        case "TO":
            return configs[26]
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