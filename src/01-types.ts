// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 23

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, boolean]
title = [1, "foo", true]

// enum
enum Colors {
    white = '#fff',
    black = '#000',
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = [1]

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null / undefined (não aconselhado para tipos primitivos)
type Bla = string | undefined

// never
function error(): never {
    throw new Error('error');
}

// object (qualquer coisa que não seja um tipo primitivo)
let cart: object

cart = {
    key: 'fi'
}