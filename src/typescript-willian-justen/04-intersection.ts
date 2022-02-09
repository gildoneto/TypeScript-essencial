// accountInfo
// charInfo
// PlayerInfo

// define tipo
type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: 'Gildo'
}

// define tipo
type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'gildoso',
  level: 100
}

// INTERSECTION
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  name: 'Neto',
  nickname: 'gildoso',
  id: 123,
  level: 100
}