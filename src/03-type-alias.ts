// Exemplo de Union (uid: number | string)

/* function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: number | string, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`)
} */

// Refatorando codigo acima para usar Type Alias

// type alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'Neto')
logInfo('123', 'Neto')

type Platform = 'Windows' | 'Mac OS' | 'Linux'

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('Linux')
// Refatorando para usar um type Alias